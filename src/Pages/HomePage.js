import React from "react";

import Header from "../Components/Header";
import { Link } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";
import Fade from "react-reveal/Fade";
import Blog from "../Components/Blog";

function HomePage() {
  return (
    <div style={{ overflow: "none" }}>
      <Header />

      <div className="homePage">
        <div className="parallax">
          <Home id="home" />

          <Fade bottom>
            <About id="about" />
          </Fade>
          <br />
          <Blog id="blog" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
