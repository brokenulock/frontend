import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
// import lightmode from "./mapstyles/lightMode";
// import darkmode from "./mapstyles/darkMode";

function Map(props) {
  // const [selectedMarker, setSelectedMarker] = useState(null);


  // const mapMode = () => {
  //   if (localStorage.getItem("mapmode") === "darkmode") {
  //     return darkmode;
  //   }
  //   if (localStorage.getItem("mapmode") === "lightmode") {
  //     return lightmode;
  //   } else {
  //     return lightmode;
  //   }
  // };

  return (
    <div>
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
        // defaultOptions={{ styles: mapMode() }}
      />
      {/* {props.posts &&
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
      )} */}
    </div>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function PostMap() {
  return (
    <div
      style={{
        margin:"auto",
        marginTop: "30px",
        marginBottom: "30px",
        overflow: "hidden",
        width: "100%",
        height: "400px",
        // borderRadius: "30px"
      }}
    >
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
