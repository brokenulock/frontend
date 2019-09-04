import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

export default function PostComments(props) {
  const [allComments, setAllComments] = useState();

  useEffect(() => {
    call("comment added");
  }, [props.commentAdded]);

  useEffect(() => {
    if (allComments && allComments.length > 0) {
      setInterval(() => {
        call("comments updated");
      }, 10000);
    }
  }, [allComments]);

  const call = event => {
    axios
      .get(
        `${process.env.REACT_APP_DOMAIN_NAME}api/comments/post/${props.postId}`
      )
      .then(res => {
        console.log(event);
        setAllComments(res.data.comments);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return (
    <div>
      {allComments && allComments.length > 0 ? (
        allComments.map(comment => {
          return (
            <div
              style={{
                display: "flex",
                borderBottom: "solid",
                justifyContent: "space-between"
              }}
            >
              <div style={{ display: "flex" }}>
                {comment.username}:<h3>{comment.comment}</h3>
              </div>
              <p>{moment(comment.created_at).calendar()}</p>
            </div>
          );
        })
      ) : (
        <div>no posts</div>
      )}
    </div>
  );
}
