import React from "react";
import PostCard from "../material-ui/card";

export default function PostsPage(props) {
  return (
    <div className="postContainer">
      <div className="cardsContainer">
        {/* {props.posts.length > 0 &&
          props.posts.map(post => {
            return <PostCard post={post} />;
          })} */}
        {props.posts ? (
          props.posts.length > 0 &&
          props.posts.map(post => {
            return <PostCard post={post} />;
          })
        ) : (
          <div style={{ background: "white", borderRadius: "100%" }}>
            <img
              src="https://loading.io/spinners/microsoft/lg.rotating-balls-spinner.gif"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
}
