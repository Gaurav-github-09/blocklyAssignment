import { Component } from "react";
import Wave from "../HeaderLogos/Wave.png";
import ProfilePic from "../HeaderLogos/ProfilePic.png";
import ProfPicDark from "../HeaderLogos/ProfPicDark.png";
import SocialsLinks from "../HeaderLogos/SocialsLinks.png";
import Email from "../HeaderLogos/Email.png";
import EmailDark from "../HeaderLogos/EmailDark.PNG";
import SocialDark from "../HeaderLogos/SocialDark.PNG";

import Rectangle from "../HeaderLogos/Rectangle.png";
import Vector1 from "../HeaderLogos/Vector1.png";
import LightLeft from "../HeaderLogos/LightLeft.png"
import BtmleftDark from "../HeaderLogos/BtmleftDark.png";
import Cornerdark from "../HeaderLogos/Cornerdark.png";

import BtmRightDark from "../HeaderLogos/BtmRightDark.png";
import BottomrightLight from "../HeaderLogos/BottomrightLight.png";

import Vector3 from "../HeaderLogos/Vector3.png";

import YellowLight from "../HeaderLogos/YellowLight.png";

import Header from "../Header";

import "./index.css";

class Home extends Component {
  state = { darkTheme: false };

  changeTheme = () => {
    this.setState((prev) => ({ darkTheme: !prev.darkTheme }));
  };

  render() {
    const { darkTheme } = this.state;

    return (
      <>
        <Header change={this.changeTheme} theme={darkTheme} />
        <div className={`centerContainer ${darkTheme && "darkThemeEffect"}`}>
          <div className="contentContainer">
            <p className="hello">Hello!</p>
            <div className="NameContainer">
              <h1 className="iam">
                I'm{" "}
                <span className={`anish ${darkTheme && "borderDark"}`}>
                  Anish{" "}
                </span>
              </h1>
              <img className="wave" src={Wave} alt="wave" />
            </div>
            <p className="Intro">
              UI/UX Designer, Front-End Developer & Thinker. Based in India.
            </p>
            <div className="BTNcont">
              <button className="Download" type="button">
                Download CV
              </button>
              <button className="Touch" type="button">
                Get in Touch!
              </button>
            </div>
          </div>
          <div>
            <img
              className="profilePic"
              src={darkTheme ? ProfPicDark : ProfilePic}
              alt="ProfilePic"
            />
          </div>
        </div>
        <div className={`Container2 ${darkTheme && "darkThemeEffect"}`}>
          <div className="part1">
            <img className="rectangle" src={darkTheme? Vector1:LightLeft} alt="bg2" />
            <img className="HandImage" src={Rectangle} alt="bg1" />
          </div>
          <div className="CenterPart">
            <div className="headingContainer">
              <h1 className="rest">
                <span className="This">T</span>
                {`his is it. ;)`}
              </h1>
              <p className={`centreMargin1 ${darkTheme && "borderDark"}`}></p>
            </div>
            <p className="Details">
              Anish Kr. Sinha is an Indian{" "}
              <span className="HighlightingPara">
                UI/UX Designer & Front End Developer{" "}
              </span>
              with a passion for designing beautiful and fuctional user
              experiences. Typically, he’s Driven & permanently Curious. He’s
              obsessed with designing things and even more obsessed with
              designing cool & clean stuff for the web and mobile. He has been
              in the business of creating since he hung his first painting on
              the wall when he was 11.
              <br /> He holds a
              <span className="HighlightingPara">
                {" "}
                bachelor degree in Computer Applications.
              </span>
              During his graduation, he has been actively involved in the web
              design community for the last 3 years. he has designed websites
              for small businesses, events, nonprofits and more. Currently he’s
              based in Bihar, <span className="HighlightingPara">India</span>.
              Where he’s working as an independent creative.
              <br />
              <br /> His interests, however, extend beyond the web and he loves
              helping people with branding and print design. He even loves
              designing <span className="HighlightingPara">3D floor plan.</span>
              <br />
              <br /> When he’s not designing, he’s probably hanging out with his
              girlfriend, watching series, sketching or messing around on
              something inspired by YouTube tutorials.
            </p>
            <div className={`borderEnd ${darkTheme && "borderDark"}`}></div>
          </div>
          <div className="lastPart">
            <img
              className="yellowBar"
              src={darkTheme ? Vector3 : YellowLight}
              alt="bg2"
            />
          </div>
          <div className="bgImgs">
            <img
              className="leftbg"
              src={darkTheme ? Cornerdark : BtmleftDark}
              alt="bg1"
            />

            <img
              className="rightbg"
              src={darkTheme ? BtmRightDark : BottomrightLight}
              alt="bg2"
            />
          </div>
        </div>
        <div className="Bottombar">
          <img
            className="SocialsLinks"
            src={darkTheme ? SocialDark : SocialsLinks}
            alt="ProfilePic"
          />
          <img
            className="Email"
            src={darkTheme ? EmailDark : Email}
            alt="ProfilePic"
          />
        </div>
      </>
    );
  }
}
export default Home;
