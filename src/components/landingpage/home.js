import React from "react";
import {
  DesignOne,
  DesignTwo,
  DesignThree,
  DesignFive,
  DesignFour,
  DesignSix,
  HomepageLogo
} from "../../bulfmlimg/illustrations";
import { Link as Scroll } from "react-scroll";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="section" id="top">
        <div className="topMain">
          <div className="HomePageLogoContainer">
            <img src={HomepageLogo} alt="" className="HomePageLogo" />
          </div>
          <div className="topTextContainer">
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
            <a disabled className="button topButton" href="#">
              Coming Soon
            </a>
          </div>
        </div>
        <Scroll
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="fa fa-arrow-down bottomButton"
        />
      </div>
      <div className="section" id="section1">
        <div className="sectionContent">
          <div className="imgContainer">
            <img src={DesignOne} className="illustration" alt="" />
          </div>
          <div className="textContainer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
              cursus vitae congue mauris rhoncus.
            </p>
          </div>{" "}
        </div>
      </div>
      <div className="section">
        <div className="sectionContent ContentReverse">
          <div className="imgContainer">
            <img src={DesignTwo} className="illustration" alt="" />
          </div>
          <div className="textContainer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
              cursus vitae congue mauris rhoncus.
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="sectionContent">
          <div className="imgContainer">
            <img src={DesignThree} className="illustration" alt="" />
          </div>
          <div className="textContainer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
              cursus vitae congue mauris rhoncus.
            </p>
          </div>{" "}
        </div>
      </div>
      <div className="section">
        <div className="sectionContent ContentReverse">
          <div className="imgContainer">
            <img src={DesignFour} className="illustration" alt="" />
          </div>
          <div className="textContainer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
              cursus vitae congue mauris rhoncus.
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="sectionContent">
          <div className="imgContainer">
            <img src={DesignFive} className="illustration" alt="" />
          </div>
          <div className="textContainer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
              cursus vitae congue mauris rhoncus.
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="sectionContent ContentReverse">
          <div className="imgContainer">
            <img src={DesignSix} className="illustration" alt="" />
          </div>
          <div className="textContainer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
              cursus vitae congue mauris rhoncus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
