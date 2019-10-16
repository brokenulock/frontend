import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

export default function PostMap(props) {
  const [viewport, setViewport] = useState();
  const [locations, setLocations] = useState();

  useEffect(() => {
    setViewport({
      width: 700,
      height: 400,
      latitude: props.post.latitude,
      longitude: props.post.longitude,
      zoom: 13
    });
    if (
      props.post.all_seen_locations &&
      props.post.all_seen_locations.length > 0
    ) {
      setLocations(props.post.all_seen_locations);
    }
  }, [props.post.latitude && props.post.longitude]);

  return (
    <ReactMapGL
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
      {...viewport}
      onViewportChange={newViewport => setViewport({ ...newViewport })}
    >
      <Marker
        latitude={props.post.latitude}
        longitude={props.post.longitude}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <img
          src="https://github.com/fixmylifedesigns/googlemaps-geolocation/blob/master/src/components/ulock.png?raw=true"
          style={{ height: "40px" }}
        />
      </Marker>
      {locations &&
        locations.map(lastSeen => {
          return (
            <Marker
              latitude={lastSeen.last_latitude}
              longitude={lastSeen.last_longitude}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <img
                src="https://github.com/fixmylifedesigns/googlemaps-geolocation/blob/master/src/components/ulock.png?raw=true"
                style={{ height: "40px" }}
              />
            </Marker>
          );
        })}
    </ReactMapGL>
  );
}
