import React from "react";

export default function Newsletter() {
  return (
    <div style={{borderBottom:"3px solid #ffa351"}} className="news-cont">
      <div className="newsletter">
        <div className="newimg"></div>
        <div className="newform">
          <div className="newtitle">Hi, I am Sakshi. Can i send you something?</div>
          <div className="newdesc">I wanna send you my blogs...</div>
          <div className="newinput">
            <input type="email" placeholder="Enter your email..."/>
            <button>Yes, please !!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
