import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <div className="home">
      <div className="homeimg">
        <Carousel className="car-0" thumbWidth={200}>
          <div className="slide-0">
            <div className="car-img"></div>
          </div>
          <div className="slide-0">
            <div className="car-img"></div>
          </div>
          <div className="slide-0">
            <div className="car-img"></div>
          </div>
        </Carousel>
      </div>
      <div className="homeleft">
        <div className="hometitle">BeneathTheSunRays</div>
      </div>
      <div className="homeright"></div>
    </div>
  );
}
