import React from "react";
import moment from "moment";

export default function PostTopContent(props) {
  return (
    <div
      className="idPostContainer"
      style={{
        background: "white",
        borderTopRightRadius: "50px",
        borderTopLeftRadius: "50px"
      }}
    >
      <div
        style={{
          background: "white",
          display: "flex",
          borderTopRightRadius: "50px",
          borderTopLeftRadius: "50px",
          alignContent: "center",
          justifyContent: "space-around"
        }}
      >
        <div
          className="profileImageContainer"
          style={{
            width: "200px",
            margin: "30px",
            
          }}
        >
          <img src={props.post.avatar} alt="" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center"
          }}
        >
          <div className="contactInfo">
            <div className="usernameBio">
              <p>Username: {props.post.username}</p>
              <p>Email: {props.post.email}</p>
            </div>
          </div>
          <div className="bioContainer">
            <p>Posted on: {moment(props.post.created_at).format("L")}</p>
          </div>
        </div>
      </div>
      {/* <img src={props.post.image} alt="" /> */}
    </div>
  );
}
