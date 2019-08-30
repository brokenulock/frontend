import React from "react";
import Logo from "../../bulfmlimg/navlogo.png";
import { Link as Scroll } from "react-scroll";
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
          <img  src={Logo} alt="" /></a>
        </div>
      {/* </Scroll> */}
      <TabletMenu signOut={props.signOut} signedin={props.signedin} />
      <nav className="navigation">
        <a
          href="https://reactlocation.netlify.com/"
          className="footerLink"
          style={{ marginRight: "20px" }}
        >
          Prototype Map
        </a>
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
          Posts
        </Link>
        {/* <Link
          to="/UserPage"
          className="footerLink"
          style={{ marginRight: "15px" }}
        >
          User
        </Link> */}
        <LoginForm
          signOut={props.signOut}
          signedin={props.signedin}
          class="footerLink"
        />
      </nav>
    </div>
  );
}
