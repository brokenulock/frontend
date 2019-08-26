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
        <a href="https://reactlocation.netlify.com/" className="footerLink" style={{marginRight:'15px', borderBottom:"solid 2px"}}>Prototype Map</a>
        <a href="https://documenter.getpostman.com/view/7133880/SVfMUAdJ?version=latest" className="footerLink" style={{marginRight:'15px', borderBottom:"solid 2px"}}>
              Api Doc
            </a>
            <a href="https://github.com/brokenulock" className="footerLink" style={{marginRight:'15px', borderBottom:"solid 2px"}}>
              Github Repo
            </a>
      </nav>
    </div>
  );
}
