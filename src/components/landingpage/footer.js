import React from "react";

export default function Footer() {
  return (
    <div className="footerContainer">
      <h6>
        <a href="https://www.fmlcycling.com" className="footerLink">
          FIXMYLIFE SHOP
        </a>{" "}
      </h6>
      <h6>
        Copyright 2019 Design by{" "}
        <a href="https://www.duranirving.com/" className="footerLink">
          Irving Duran
        </a>
      </h6>
      <div className="icons">
      <i
          href="https://www.youtube.com/watch?v=reFElyEkXPg&t=20s"
          class="fa fa-linkedin iconLinks"
          alt=""
        />
        <i
          href="https://www.instagram.com/stolenbikesnyc/"
          class="fa fa-instagram iconLinks"
        />
        <i
          href="https://www.instagram.com/explore/tags/stolenbikesnyc/"
          class="fa fa-hashtag iconLinks"
        />
        <i
          href="https://twitter.com/fixmylifenyc"
          class="fa fa-twitter iconLinks"
        />
        <i
          href="https://github.com/fixmylifedesigns"
          class="fa fa-github iconLinks"
        />
        <i
          href="https://www.linkedin.com/in/irvingduran/"
          class="fa fa-linkedin iconLinks"
        />
      </div>
    </div>
  );
}
