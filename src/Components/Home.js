import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <div className="home">
      <div className="homeimg">
        <Carousel className="car-0" autoPlay emulateTouch infiniteLoop thumbWidth={200}>
          <div className="slide-0">
            <div className="car-img-1"></div>
          </div>
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
        <div className="hometitle">
          <div>BeneathTheSunRays</div>
          <div className="tag">Because every ray comes with a hope...</div>
        </div>
      </div>
      <div className="homeleft"></div>
      <div className="homeright"></div>
    </div>
  );
}
