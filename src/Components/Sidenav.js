import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FaceRoundedIcon from "@material-ui/icons/FaceRounded";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
import DraftsIcon from "@material-ui/icons/Drafts";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

export default function Header() {
  return (
    <header className="sidenav">
      <Fade top cascade>
        <div className="brand"></div>

        <div className="navs">
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            <div className="navlink">
              <HomeIcon className="icon" />
              Home
            </div>
          </Link>

          <Link activeClass="active" to="about" spy={true} smooth={true}>
            <div className="navlink">
              <FaceRoundedIcon className="icon" />
              About
            </div>
          </Link>

          <Link activeClass="active" to="blog" spy={true} smooth={true}>
            <div className="navlink">
              <CreateRoundedIcon className="icon" />
              Blog
            </div>
          </Link>

          <Link activeClass="active" to="podcasts" spy={true} smooth={true}>
            <div className="navlink">
              <HeadsetMicIcon className="icon" />
              Podcasts
            </div>
          </Link>

          <Link activeClass="active" to="poetry" spy={true} smooth={true}>
            <div className="navlink">
              <DraftsIcon className="icon" />
              Spoken Poetry
            </div>
          </Link>
     
        </div>

        <div className="socials">
          {/* <div className="icon-holder">
            <img src="https://img.icons8.com/color/48/fa314a/facebook-new.png" />
          </div>

          <div className="icon-holder">
            <img src="https://img.icons8.com/fluent/48/fa314a/instagram-new.png" />
          </div> */}
        </div>
        
      </Fade>
    </header>
  );
}
