import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import PostCard from '../material-ui/card'
import lightmode from "./mapstyles/lightMode";
import darkmode from "./mapstyles/darkMode";
import MenuButton from "../material-ui/mapMenu";

function Map(props) {
  const [selectedMarker, setSelectedMarker] = useState(null);


  const mapMode = () => {
    if (localStorage.getItem("mapmode") === "darkmode") {
      return darkmode;
    }
    if (localStorage.getItem("mapmode") === "lightmode") {
      return lightmode;
    } else {
      return lightmode;
    }
  };

  return (
    <div>
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
        defaultOptions={{ styles: mapMode() }}
      />
      <Marker
        key="location"
        position={{
          lat: props.lat,
          lng: props.lng
        }}
        // icon={{
        //   url: ReactLogo,
        //   scaledSize: new window.google.maps.Size(45, 60)
        // }}
      />
      {props.posts &&
        props.posts.map((stolen) => {
          // console.log(ulock);
          return (
            <Marker
              // key={ulock.id}
              position={{
                lat: stolen.latitude,
                lng: stolen.longitude
              }}
              // icon={{
              //   url: stolen,
              //   scaledSize: new window.google.maps.Size(45, 60)
              // }}
              onClick={() => {
                console.log(stolen);
                setSelectedMarker(stolen);
              }}
            />
          );
        })}
      {selectedMarker && (
        <InfoWindow
          position={{
            lat: selectedMarker.latitude,
            lng: selectedMarker.longitude
          }}
          onCloseClick={() => {
            setSelectedMarker(null);
          }}
        >
          <div>
          <PostCard post={selectedMarker} />
          </div>
        </InfoWindow>
      )}
    </div>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function TestMap(props) {
  const [mapMode, setMapMode] = React.useState(lightmode);

  const handleMapMode = () => {
    if (mapMode === lightmode) {
      setMapMode(darkmode);
    }
    if (mapMode === darkmode) {
      setMapMode(lightmode);
    }
    console.log(mapMode);
  };


  return (
    <div
      style={{
        margin:"auto",
        marginTop: "30px",
        marginBottom: "30px",
        overflow: "hidden",
        width: "100vw",
        height: "80vh",
        // borderRadius: "30px"
      }}
    >
      <div style={{ marginTop: "30px" }}></div>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        lat={props.lat}
        lng={props.lng}
        mapMode={props.mapMode}
        handleMapMode={props.handleMapMode}
        marker={props.marker}
        posts={props.posts}
      />

      <MenuButton handleMapMode={handleMapMode} />
    </div>
  );
}
