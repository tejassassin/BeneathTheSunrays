import React from "react";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <div className="about">
      <a href="/about">
        <div className="abtimg"></div>
      </a>
      <div className="abttext">
        <div className="abttitle">ABOUT ME</div>
        <div className="abtdesc">Hi, my name is Sakshi.........</div>
        <div className="abtbtn">
          <a href="/about">know More</a>
        </div>
      </div>
    </div>
  );
}
