import React from "react";
import Logo from "../../bulfmlimg/navlogo.png";
// import { Link as Scroll } from "react-scroll";
import TabletMenu from "./material-ui/materialUI";
import LoginForm from "./material-ui/loginForm";
import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <div className="navigationContainer">
      {/* <Scroll
        activeClass="active"
        to="top"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      > */}
      <div className="navLogo">
        <a href="/">
          <img src={Logo} alt="" />
        </a>
      </div>
      {/* </Scroll> */}
      <TabletMenu signOut={props.signOut} signedin={props.signedin} />
      <nav className="navigation">
      <Link
            to={`/map/`}
          className="footerLink"
          style={{ marginRight: "20px" }}
        >
          Map
        </Link>
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
        <Link
          to="/posts"
          className="footerLink"
          style={{ marginRight: "15px" }}
        >
          Seeded Data
        </Link>
        <Link
          to="/new-post"
          className="footerLink"
          style={{ marginRight: "15px" }}
        >
          New Post
        </Link>
        {localStorage.getItem("token") || props.signedin ? (
          <Link
            to={`/user/`}
            className="footerLink"
            style={{ marginRight: "15px" }}
          >
            Profile
          </Link>
        ) : (
          ""
        )}

        <LoginForm
          signOut={props.signOut}
          signedin={props.signedin}
          class="footerLink"
        />
      </nav>
    </div>
  );
}
