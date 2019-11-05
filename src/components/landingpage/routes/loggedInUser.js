import React from "react";
import PostCard from "../material-ui/card";
import moment from "moment";
import EditProfile from "../material-ui/editProfile";

export default function LoggedInPage(props) {
  const user = props.userData;

  return (
    <div className="userPage">
      {console.log(props.userData)}
      <div className="usersInfo">
        <div className="profileImageContainer">
          <img src={user.avatar} alt="" className="profileImage" />
        </div>
        <div className="contactInfoContainer">
          <div className="contactInfo">
            <div className="usernameBio">
              <p>Username: {user.username ? user.username : "N/A"}</p>
              <p>First Name: {user.first_name ? user.first_name : "N/A"}</p>
              <p>Last Name: {user.last_name ? user.last_name : "N/A"}</p>

              <p>Phone: {user.phone ? user.phone : "N/A"}</p>
            </div>
            <div>
              <p>Email: {user.email}</p>
              <p>Instagram: {user.instagram ? user.instagram : "N/A"}</p>
              <p>Twitter: {user.twitter ? user.twitter : "N/A"}</p>
              <p>Facebook: {user.facebook ? user.facebook : "N/A"}</p>
            </div>
          </div>
          <div className="bioContainer">
            <p>Member Since: {moment(user.created_at).format("L")}</p>
          </div>
          <div className="bioContainer">
            <p>Bio: {user.bio ? user.bio : "N/A"}</p>
          </div>
        </div>
        <EditProfile user={user}/>
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

// phone: null
// website: null
