import React from "react";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <div className="about">
      {/* <a href="/about">
        <div className="abtimg"></div>
      </a>
      <div className="abttext">
        <div className="abttitle">ABOUT ME</div>
        <div className="abtdesc">Hi, my name is Sakshi.........</div>
        <div className="abtbtn">
          <a href="/about">know More</a>
        </div>
      </div> */}

      <div className="card">
        <div className="card-content">
          <div className="card-title">
            About Me
            <div className="subtitle">Kya aap mere baare me janna chahoge?</div>
          </div>
          <div className="card-body">
            Hi, I am am Sakshi....welcome to my blog. please share the content.
            You will love every bit of it. share it on social media. it's full
            of positivity.{" "}
          </div>
          <a href="/about" className="btn">
            Know more
          </a>
        </div>
      </div>
    </div>
  );
}
