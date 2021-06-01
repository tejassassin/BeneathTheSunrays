import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function Insta() {
  return (
    <div className="insta">
        <div className="insta-title">
            Find us on instagram @beneathTheSunRays
        </div>
      <Carousel className="insta-car" thumbWidth={200}>
        <div className="slide-2">
          <div className="inst-cont"></div>
          <div className="inst-cont"></div>
          <div className="inst-cont"></div>
        </div>
        <div className="slide-2">
          <div className="inst-cont"></div>
          <div className="inst-cont"></div>
          <div className="inst-cont"></div>
        </div>
      </Carousel>
    </div>
  );
}
