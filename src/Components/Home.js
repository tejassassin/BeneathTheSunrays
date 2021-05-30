import React from "react";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <div className="home">
      <div className="homeimg"></div>
      <div className="homeleft">
        <Fade left>
          <div className="hometitle">𝓑𝓮𝓷𝓮𝓪𝓽𝓱𝓣𝓱𝓮𝓢𝓾𝓷𝓻𝓪𝔂𝓼</div>
        </Fade>
      </div>
      <div className="homeright"></div>
    </div>
  );
}
