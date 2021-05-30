import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FaceRoundedIcon from "@material-ui/icons/FaceRounded";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
import AudiotrackRoundedIcon from "@material-ui/icons/AudiotrackRounded";
import PermContactCalendarRoundedIcon from "@material-ui/icons/PermContactCalendarRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

export default function Header() {
  return (
    <header className="header">
      <Fade top cascade>
        <div className="navs">
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            <div className="navlink">
              <HomeIcon />
              Home
            </div>
          </Link>

          <Link to="about" spy={true} smooth={true}>
            <div className="navlink">
              <FaceRoundedIcon />
              About
            </div>
          </Link>

          <Link to="blog" spy={true} smooth={true}>
            <div className="navlink">
              <CreateRoundedIcon />
              Blog
            </div>
          </Link>

          <Link to="home" spy={true} smooth={true}>
            <div className="navlink">
              <AudiotrackRoundedIcon />
              Audio/Listen
            </div>
          </Link>

          <Link to="home" spy={true} smooth={true}>
            <div className="navlink">
              <PermContactCalendarRoundedIcon />
              Contact
            </div>
          </Link>
        </div>

        <div className="search-cont">
          <input type="text" placeholder="Search..." name="search" />
          <button>
            <SearchRoundedIcon style={{ color: "white" }} />
          </button>
        </div>

        <div className="socials">
          <div className="icon-holder">
            <img src="https://img.icons8.com/fluent/48/fa314a/facebook-new.png" />
          </div>
          <div className="icon-holder">
            {/* <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c52e.png" /> */}
            <img src="https://p7.hiclipart.com/preview/158/944/963/point-area-text-brand-signage-pinterest.jpg" />
          </div>
          <div className="icon-holder">
            <img src="https://img.icons8.com/fluent/48/fa314a/instagram-new.png" />
          </div>
        </div>
      </Fade>
    </header>
  );
}
