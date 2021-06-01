import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function Audio() {
  return (
    <div className="audio">
      <div className="audio-title">Audio</div>

      <Carousel className="car-aud" thumbWidth={200}>
        <div className="slide-3">
          <div className="aud-cont"></div>
          <div className="aud-cont"></div>
        </div>

        <div className="slide-3">
          <div className="aud-cont"></div>
          <div className="aud-cont"></div>
        </div>
      </Carousel>
    </div>
  );
}
