import React from "react";
// import { Carousel } from "react-responsive-carousel";
import title from "../img/title.png";
import Fade from "react-reveal/Fade";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Home({ homeimgs }) {
  console.log(homeimgs);
  return (
    <div className="home">
      <div className="homeleft">
        <Fade bottom cascade>
          <div style={{ marginTop: "4em", textAlign: "center" }}>
            <div>Come, I will take you to the world of positive vibes...</div>
            <div style={{ marginTop: "1em" }}>
              <a
                href="https://www.instagram.com/beneaththesunrays/?hl=en"
                target="_blank"
              >
                <img
                  className="in"
                  width="50px"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                  alt="instagram"
                />
              </a>
            </div>
          </div>
          <div className="hometitle">
            <div className="home-title">
              <img src={title} alt="" />
            </div>
            <div className="tag">Because every ray comes with a hope...</div>
          </div>
        </Fade>
      </div>
      <div className="homeright">
        <Fade right>
          <div className="homeimg">
            <Carousel
              className="car-0"
              autoPlay
              infinite
              emulateTouch
              infiniteLoop
              thumbWidth={200}
              responsive={responsive}
            >
               {homeimgs.map((img) => (
                <div className="slide-0" key={img.id}>
                  <div className="car-img-1" style={{backgroundImage:`url(${img.data.imgUrl})`}}></div>
                </div>
              ))}
            </Carousel>
          </div>
        </Fade>
      </div>
    </div>
  );
}
