import React from "react";
import sakshi from "../img/sakshi.png";

export default function About() {
  return (
    <div className="about">
      <div className="abtimg">{/* <img src={sakshi} alt="" /> */}</div>
      <div className="abttext">
        <div className="abttitle">ABOUT ME</div>
        <div className="abtdesc">Hi, my name is Sakshi.........</div>
        <div className="abtbtn">
          <a href="">know More</a>
        </div>
      </div>
    </div>
  );
}
