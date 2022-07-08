import React, { useState, useEffect } from "react";

import sf from "../img/sf.gif";
import logo from "../img/logo.jpeg";
import title from "../img/title.png";

import BeatLoader from "react-spinners/BeatLoader";

export default function Loading() {
  const [size, setSize] = useState("");

  useEffect(() => {
    if (window.innerWidth < 400) {
      setSize(20);
    } 
    else if(window.innerWidth < 1200){
        setSize(50);
    }
    else {
      setSize(20);
    }
  }, []);
  return (
    <div className="page">
      <div className="cont">
        <img className="logo" src={logo} />
        <div className="title-cont">
          <div>
            <img className="title" src={title} />
          </div>
          <div className="tag">Because every ray comes with a hope...</div>
        </div>
        <div className="">
          <div className="sf-cont">
            <img className="sf" src={sf} />
          </div>
          <div className="load-cont">
          <BeatLoader color={"#ffa351"} style={{textAlign:"center"}} size={size} />
          </div>
        </div>
      </div>
    </div>
  );
}
