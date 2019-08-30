import React from "react";
import PostCard from "../material-ui/card";

export default function PostsPage(props) {
  return (
    <div>
      <div className="homeContainer">
        <div
          className="section"
          id="top"
          style={{ height: "auto", paddingTop:"100px", margin:"auto" }}
        >
          <div style={{ display: "flex", flexDirection: "row", flexWrap:"wrap" }}>
            {props.posts &&
              props.posts.map(post => {
                return <PostCard post={post} />;
              })}
          </div>
          <div style={{ display: "flex", flexDirection: "row", flexWrap:"wrap" }}>
            {props.posts &&
              props.posts.map(post => {
                return <PostCard post={post} />;
              })}
          </div>
          <div style={{ display: "flex", flexDirection: "row", flexWrap:"wrap" }}>
            {props.posts &&
              props.posts.map(post => {
                return <PostCard post={post} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

// brand: "State Bicycle"
// created_at: "2019-08-28T22:26:04.320Z"
// date_stolen: "2018-11-29T00:00:00.000Z"
// description: "example post"
// found: true
// image: "https://cdn.shopify.com/s/files/1/0232/3305/products/State_Bicycle_Cyclocross_SSCX_Thunderbird2.JPG?v=1565719092"
// last_date_seen: null
// last_latitude: 40.6953
// last_longitude: -73.9133
// last_seen_location: "Bushwick, Brooklyn, NY"
// last_time_seen: null
// latitude: 40.6958
// location: "Bushwick, Brooklyn, NY"
// longitude: -73.9171
// model: "Thunderbird"
// post_id: 1
// reward: "I'll buy you a beer"
// serial_number: "4454626326325443"
// time_stolen: null
// updated_at: "2019-08-28T22:26:04.320Z"
// user_id: 1
// username: "fixmylife"
// year: "2015"
