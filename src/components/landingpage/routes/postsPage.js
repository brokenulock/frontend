import React from "react";
import PostCard from "../material-ui/card";

export default function PostsPage(props) {
  return (
    <div className="postContainer">
      <div className="cardsContainer">
        {props.posts &&
          props.posts.map(post => {
            return <PostCard post={post} />;
          })}
      </div>
    </div>
  );
}