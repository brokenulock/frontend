import React from "react";
import PostCard from "../material-ui/card";

export default function PostsPage(props) {
  const post = props.posts;
  return (
    <div className="postContainer">
      <div className="cardsContainer">
        {post ? (
          post.length > 0 &&
          post
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map(post => <PostCard post={post} userData={props.userData}/>)
        ) : (
          // <div style={{ background: "white", borderRadius: "100%" }}>
          //   <img
          //     src="https://loading.io/spinners/microsoft/lg.rotating-balls-spinner.gif"
          //     alt=""
          //   />
          // </div>
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        )}
      </div>
    </div>
  );
}
