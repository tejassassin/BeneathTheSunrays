import React from "react";
import Fade from "react-reveal/Fade";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <Fade right >
          <div className="footer-right-title">Popular posts</div>
          <ul>
            <li>
              <a href="">I Dream</a>
            </li>
            <li>
              <a href="">I Dream</a>
            </li>{" "}
            <li>
              <a href="">I Dream</a>
            </li>
          </ul>
        </Fade>
      </div>

      <div className="footer-right">
        <Fade right>
          <div className="foot-news">
            <div className="foot-form">
              <div className="foot-newtitle">
                Hi, I'm Sakshi. Can I send you something positive to boost your
                day?
              </div>
              {/* <div className="newdesc">I wanna send you my blogs...</div> */}
              <div className="foot-newinput">
                <input type="email" placeholder="Enter your email..." />
                <button>Yes, please !!</button>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </footer>
  );
}
