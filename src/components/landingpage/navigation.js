import React from "react";
import Logo from "../../bulfmlimg/navlogo.png";
import { Link as Scroll } from "react-scroll";

export default function Navigation() {
  return (
    <div className="navigationContainer">
      <Scroll
        activeClass="active"
        to="top"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <div className="navLogo">
          <img src={Logo} alt="" />
        </div>
      </Scroll>
      {/* <h1>BROKEN U-LOCK</h1>  */}
      <nav>
        <a />
      </nav>
    </div>
  );
}
