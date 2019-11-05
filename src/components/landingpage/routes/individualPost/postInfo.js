import React from "react";

export default function PostInfo(props) {
  const post = props.post;
  console.log(post);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <div style={{ width: "49%" }}>
          <p>Brand: {post.manufacturer || "N/A"}</p>
          <p>Model: {post.model || "N/A"}</p>
          <p>Year: {post.year || "N/A"}</p>          <p>Serial Number: {post.serial_number || "N/A"}</p>
        </div>
        <div style={{ width: "49%" }}>

          <p>Reward: {post.reward || "N/A"}</p>
          <p>Found: {post.found || "N/A"}</p>
          <p>Location Stolen: {post.location || "N/A"}</p>
          <p>Last Seen: {post.last_seen_location || post.location }</p>
        </div>
      </div>
      <p>Description: {post.description}</p>
      <img src={props.post.image} alt="" />
    </div>
  );
}
