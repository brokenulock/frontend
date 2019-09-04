import React from "react";
import { geolocated } from "react-geolocated";
import Maps from './map'


function GeoLocation(props) {
  const GeoLocationEnabled = () => {
    return !props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !props.isGeolocationEnabled ? (
      <div
        style={{ background: "white", borderRadius: "20px", padding: "30px" }}
      >
        Geolocation is not enabled
      </div>
    ) : props.coords ? (
      <div>
          {console.log(props.coords)}
        <Maps
          lat={props.coords.latitude}
          lng={props.coords.longitude}
        //   mapMode={props.mapMode}
        //   handleMapMode={props.handleMapMode}
        //   marker={props.marker}
        posts={props.posts}
        />
      </div>
    ) : (
      <div
        style={{ background: "white", borderRadius: "20px", padding: "30px" }}
      >
        Getting the location data&hellip;{" "}
      </div>
    );
  };

  return <div>{GeoLocationEnabled()}</div>;
}

export default geolocated({
    positionOptions: {
      enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
  })(GeoLocation);