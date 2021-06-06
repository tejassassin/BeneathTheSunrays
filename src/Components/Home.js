import React from "react";
import { Carousel } from "react-responsive-carousel";
import title from "../img/title.png";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <div className="home">
      <div className="homeleft">
        <Fade bottom cascade>
          <div className="hometitle">
            <div className="home-title">
              <img src={title} alt="" />
            </div>
            <div className="tag">Because every ray comes with a hope...</div>
          </div>
        </Fade>
      </div>
      <div className="homeright">
        <Fade right >
          <div className="homeimg">
            <Carousel
              className="car-0"
              autoPlay
              emulateTouch
              infiniteLoop
              thumbWidth={200}
            >
              {/* <div className="slide-0">
                <div className="car-img-1"></div>
              </div> */}
              <div className="slide-0">
                <div className="car-img-2"></div>
              </div>
              <div className="slide-0">
                <div className="car-img-3"></div>
              </div>
              <div className="slide-0">
                <div className="car-img-4"></div>
              </div>
              <div className="slide-0">
                <div className="car-img-5"></div>
              </div>
            </Carousel>
          </div>
        </Fade>
      </div>
    </div>
  );
}
