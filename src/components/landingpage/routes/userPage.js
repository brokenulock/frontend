import React, { useState, useEffect } from "react";
import PostCard from "../material-ui/card";
import moment from "moment";
import axios from "axios";

export default function UserPage(props) {
  const [user, setUser] = useState(false);
//   const [loggedInUser, setLoggedInUser] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://broken-u-lock.herokuapp.com/api/users/${props.match.params.id}`
      )
      .then(res => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, [props.match.params.id]);

//   useEffect(() => {
//     const config = {
//       headers: {
//         authorization: localStorage.getItem("token")
//       }
//     };

//     axios
//       .get("https://broken-u-lock.herokuapp.com/api/users/", config)
//       .then(res => {
//         console.log(res.data);
//         setLoggedInUser(res.data);
//       })
//       .catch(err => {
//         console.log(err.response);
//       });
//   }, [user]);

  return (
    <div className="userPage">
      {/* {console.log("",props.loggedInUser)} */}
      {console.log("user", user)}
      <div className="usersInfo">
        <div className="profileImageContainer">
          <img src={user.avatar} alt="" className="profileImage" />
        </div>
        <div className="contactInfoContainer">
          <div className="contactInfo">
            <div className="usernameBio">
              <p>Username: {user.username}</p>

              <p>Email: {user.email}</p>
            </div>
          </div>
          <div className="bioContainer">
            <p>Member Since: {moment(user.created_at).format("L")}</p>
          </div>
          <div className="bioContainer">
            <p>Bio: {user.bio ? user.bio : "N/A"}</p>
          </div>
        </div>
      </div>
      <div className="usersPosts">
        {user.posts && user.posts.length > 0 ? (
          user.posts.map(post => {
            return <PostCard post={post} />;
          })
        ) : (
          <div>no posts</div>
        )}
      </div>
    </div>
  );
}
