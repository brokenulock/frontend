import React from "react";
import InstaGrid from "../../instagram/instaGrid";
import ulock from "../../../bulfmlimg/ulock.png";
export default function Instagram() {
  return (
    <div className="instagramContainer">
      <div className="instagramUserInfoContainer">
        <img src={ulock} className="instagramUserImage" />
        <div style={{}}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              color: "white"
            }}
          >
            <h4>stolenbikesnyc </h4>
            <a href="http://instagram.com/stolenbikesnyc">
              <button style={{ color: "white", padding: "0 5px" }}>
                Follow Us
              </button>
            </a>
          </div>
          <div style={{ width: "300px", color: "white" }}>
            <h5 style={{ fontWeight: "bold" }}>
              Brought to you by fixmylifenyc
            </h5>
            <h5>
              New site and app in the works @brokenulock Just dm your stolen
              bicycle and all the info You can view project website here
            </h5>
          </div>
        </div>
      </div>
      <div className="recentPostHeader">
        <h3>Recent Posts</h3>
      </div>

      <InstaGrid account="stolenbikesnyc" />
    </div>
  );
}
