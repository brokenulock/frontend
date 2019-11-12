import React from "react";

export default function Footer() {
  return (
    <div className="footerContainer">
      <h6>
        <a href="https://www.fmlcycling.com" className="footerLink">
          FIXMYLIFE SHOP
        </a>{" "}
        <a
          href="https://documenter.getpostman.com/view/7133880/SVfMUAdJ?version=latest"
          className="footerLink"
          style={{ marginRight: "15px" }}
        >
          Api Doc
        </a>
        <a
          href="https://github.com/brokenulock"
          className="footerLink"
          style={{ marginRight: "15px" }}
        >
          Github Repo
        </a>
      </h6>
      <h6>
        Copyright 2019 Design by{" "}
        <a href="https://www.duranirving.com/" className="footerLink">
          Irving Duran
        </a>
      </h6>
      <div className="icons">
        <a
          href="https://www.youtube.com/watch?v=reFElyEkXPg&t=20s"
          class="fa fa-youtube iconLinks"
          alt=""
        >
          <p style={{ display: "none" }}>youtube</p>
        </a>
        <a
          href="https://www.instagram.com/stolenbikesnyc/"
          class="fa fa-instagram iconLinks"
        >
          <p style={{ display: "none" }}>instagram</p>
        </a>
        <a
          href="https://www.instagram.com/explore/tags/stolenbikesnyc/"
          class="fa fa-hashtag iconLinks"
        >
          <p style={{ display: "none" }}>youtube</p>
        </a>
        <a
          href="https://twitter.com/fixmylifenyc"
          class="fa fa-twitter iconLinks"
        >
          <p style={{ display: "none" }}>twitter</p>
        </a>
        <a
          href="https://github.com/fixmylifedesigns"
          class="fa fa-github iconLinks"
        >
          <p style={{ display: "none" }}>github</p>
        </a>
        <a
          href="https://www.linkedin.com/in/irvingduran/"
          class="fa fa-linkedin iconLinks"
        >
          <p style={{ display: "none" }}>linkedin</p>
        </a>
      </div>
    </div>
  );
}
