import React, { useEffect, useState } from "react";

import Fade from "react-reveal/Fade";

export default function Footer({ pposts}) {

 

  return (
    <footer className="footer">
      <div className="footer-left">
        <Fade>
          <div className="footer-left-title">Popular posts</div>
          <ul>
            {pposts.map((post) => (
              <li>
                <a href={`/blogs/${post.id}`}>{post?.data?.title}</a>
              </li>
            ))}
          </ul>
        </Fade>
      </div>

      <div className="footer-middle">
        <Fade>
          <div className="foot-news">
            <div className="foot-form">
              <div className="foot-newtitle">
                Get chitthi of hope, happiness and everything lively to cheer up
                your day.
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
      <div className="footer-right">
        <Fade>
          <div className="footer-contact">
            <div>Mail us:</div>
            <div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=beneaththesunrays@gmail.com"
                target="_blank"
              >
                beneaththesunrays@gmail.com
              </a>
            </div>
          </div>
          <div className="footer-contact">
            <div>DM us:</div>
            <div>
              <a
                href="https://www.instagram.com/beneaththesunrays/?hl=en"
                target="_blank"
              >
                @beneaththesunrays
              </a>
            </div>
          </div>
          <div className="footer-contact">Show some love:</div>

          <div className="footer-socials">
            <div className="in">
              <a
                href="https://www.instagram.com/beneaththesunrays/?hl=en"
                target="_blank"
              >
                <img src="https://img.icons8.com/fluent/48/fa314a/instagram-new.png" />
              </a>
            </div>
            <div className="fb">
              <a
                href="https://www.facebook.com/beneaththesunrays.in"
                target="_blank"
              >
                <img src="https://img.icons8.com/color/48/fa314a/facebook-new.png" />
              </a>
            </div>
            <div className="pin">
              <a
                href="https://in.pinterest.com/beneaththesunrays/_created/"
                target="_blank"
              >
                <img src="https://i.pinimg.com/originals/d3/d1/75/d3d175e560ae133f1ed5cd4ec173751a.png" />
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </footer>
  );
}
