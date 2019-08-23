import React from "react";
import Logo from "../../bulfmlimg/navlogo.png";
import { Link as Scroll } from "react-scroll";
import TabletMenu from './material-ui/materialUI'

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
      <TabletMenu />
      <nav className="navigation">
        <a href="https://reactlocation.netlify.com/" className="footerLink">Prototype Map</a>
      </nav>
    </div>
  );
}
