import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FaceRoundedIcon from "@material-ui/icons/FaceRounded";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
import AudiotrackRoundedIcon from "@material-ui/icons/AudiotrackRounded";
import PermContactCalendarRoundedIcon from "@material-ui/icons/PermContactCalendarRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

export default function Header() {
  return (
    <header className="header">
      <div className="navs">
        <a href="">
          <div className="navlink">
            <HomeIcon />
            Home
          </div>
        </a>

        <a href="">
          <div className="navlink">
            <FaceRoundedIcon />
            About
          </div>
        </a>
        <a href="">
          <div className="navlink">
            <CreateRoundedIcon />
            Blog
          </div>
        </a>
        <a href="">
          <div className="navlink">
            <AudiotrackRoundedIcon />
            Audio/Listen
          </div>
        </a>
        <a href="">
          <div className="navlink">
            <PermContactCalendarRoundedIcon />
            Contact
          </div>
        </a>
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
          <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c52e.png" />
        </div>
        <div className="icon-holder">
          <img src="https://img.icons8.com/fluent/48/fa314a/instagram-new.png" />
        </div>
      </div>
    </header>
  );
}
