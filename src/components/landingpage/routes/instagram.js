import React from "react";
import InstaGrid from "../../instagram/instaGrid";
import ulock from "../../../bulfmlimg/ulock.png";
export default function Instagram() {
  return (
    <div
      style={{
        paddingTop: "70px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <div style={{ display: "flex", maxWidth: "1200px", margin: "auto" }}>
        <img src={ulock} style={{ width: "170px", height: "170px" }} />
        <div style={{}}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h4 style={{ color: "white" }}>stolenbikesnyc </h4>
            <a href="http://instagram.com/stolenbikesnyc">
              <button style={{ color: "white", padding: "0 5px" }}>
                Follow Us
              </button>
            </a>
          </div>
          <div style={{ width: "300px" }}>
            <h5 style={{ fontWeight: "bold", color: "white" }}>
              Brought to you by fixmylifenyc
            </h5>
            <h5 style={{ color: "white" }}>
              New site and app in the works @brokenulock Just dm your stolen
              bicycle and all the info You can view project website here
            </h5>
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: "solid 1px white",
          width: "900px",
          margin: "10px auto"
        }}
      >
        <h3 style={{ color: "white" }}>Recent Posts</h3>
      </div>

      <InstaGrid account="stolenbikesnyc" />
    </div>
  );
}
