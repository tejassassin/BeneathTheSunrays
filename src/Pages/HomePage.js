import React from "react";
import Header from "../Components/Header";
import Home from "../Components/Home";
import About from "../Components/About";
import Blog from "../Components/Blog";
import Audio from "../Components/Audio";
import Newsletter from "../Components/Newsletter";
import Insta from "../Components/Insta";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <div style={{ overflow: "none" }}>
      <Header />

      <div className="homePage" style={{ marginLeft: "200px" }}>
        <Home id="home" />
        <About id="about" />
        <Newsletter
          id="newsletter"
          style={{ borderBottom: "3px solid #ffa351" }}
        />
        <Blog id="blog" />
        <Insta id="insta" />
        <Audio id="Audio" />
        <Contact id="contact" />
        <Footer id="footer" />


      </div>
    </div>
  );
}

export default HomePage;
