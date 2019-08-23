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
            <h3>
              Bringing the community together to help locate stolen bicycles.
              <br />
              SINCE 2016
            </h3>
            <a disabled className="button topButton" href="/#">
              Web App Coming Soon
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
            <h5>
              Jimmy stepped inside a coffee shop to get a drink. He was only
              gone for 10 minutes. When he came outside he realized his bike had
              been stolen.
            </h5>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="sectionContent ContentReverse">
          <div className="imgContainer">
            <img src={DesignTwo} className="illustration" alt="" />
          </div>
          <div className="textContainer">
            <h5>
              Jimmy quickly went on brokenulock.com and made a post alerting the
              other users his bike had been stolen. He listed the make, model,
              location and any other valuable information.
            </h5>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="sectionContent">
          <div className="imgContainer">
            <img src={DesignThree} className="illustration" alt="" />
          </div>
          <div className="textContainer">
            <h5>
              A couple of days later, Rocco is on his way home and notices someone
              riding a bike that he remembers seeing on brokenulock.com
            </h5>
          </div>{" "}
        </div>
      </div>
      <div className="section">
        <div className="sectionContent ContentReverse">
          <div className="imgContainer">
            <img src={DesignFour} className="illustration" alt="" />
          </div>
          <div className="textContainer">
            <h5>
              Rocco quickly opens up the web app, finds Jimmy's post and in
              seconds he is able to contact Jimmy to let him know he just spotted someone with
              his bike going down the block.
            </h5>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="sectionContent">
          <div className="imgContainer">
            <img src={DesignFive} className="illustration" alt="" />
          </div>
          <div className="textContainer">
            <h5>
              Jimmy was able to search the last known location of his bike and
              take the proper actions to retrieve it. All thanks to the
              community.
            </h5>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="sectionContent ContentReverse">
          <div className="imgContainer">
            <img src={DesignSix} className="illustration" alt="" />
          </div>
          <div className="textContainer">
            <h5>
              This Web App is being designed with the idea to help New Yorkers retrieve
              their bikes. But there is nothing stopping us from helping others
              worldwide.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
