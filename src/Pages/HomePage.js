import React, { useState } from "react";
import Sidenav from "../Components/Sidenav";
import Home from "../Components/Home";
import About from "../Components/About";
import Blog from "../Components/Blog";
import Audio from "../Components/Audio";
import Newsletter from "../Components/Newsletter";
import Insta from "../Components/Insta";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";

// import Readers from "../Components/Readers";

function HomePage() {
  const [showsrch, setShowsrch] = useState(false);

  const closeSearch = () => {
    setShowsrch(!showsrch);
  };
  const openSearch = () => {
    console.log("hi");
    setShowsrch(!showsrch);
  };

  return (
    <div>
      <Sidenav />

      <div
        id="myOverlay"
        className="overlay"
        style={{ opacity: !showsrch && "0", visibility: !showsrch && "hidden" }}
      >
        <div className="closebtn" onClick={closeSearch} title="Close Overlay">
          <CancelRoundedIcon className="cancel-btn" />
        </div>
        <div className="overlay-content">
          <input type="text" placeholder="Search.." name="search" />
          <div className="searchcont">
            <SearchRoundedIcon className="searchbtn" />
          </div>
        </div>
      </div>

      <div className="homePage" style={{ marginLeft: "16%" }}>
        <div className="search-cont" onClick={openSearch}>
          <SearchRoundedIcon className="search-btn" />
        </div>

        <Home id="home" />
        <About id="about" />
        <Newsletter
          id="newsletter"
          style={{ borderBottom: "3px solid #ffa351" }}
        />
        <Blog id="blog" />
        <Insta id="insta" />
        <Audio id="Audio" />
        {/* <Readers id="readers" /> */}
        {/* <Contact id="contact" /> */}
        <Footer id="footer" />
      </div>
    </div>
  );
}

export default HomePage;
