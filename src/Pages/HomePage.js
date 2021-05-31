import React from "react";
import Header from "../Components/Header";
import Home from "../Components/Home";
import About from "../Components/About";
import Blog from "../Components/Blog";
import Audio from "../Components/Audio";

function HomePage() {
  return (
    <div style={{ overflow: "none" }}>
      <Header />

      <div className="homePage">
        <div className="parallax">
          <Home id="home" />
          <About id="about" />
          <br />
          <Blog id="blog" />
          <br />
          <Audio id="Audio" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
