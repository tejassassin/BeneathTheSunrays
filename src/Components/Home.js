import React from "react";
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

export default function Home({ homeimgs, duration }) {
  // console.log(homeimgs)


const scrolldown = ()=> {
  let pageHeight = window.innerHeight;
  // window.scrollBy(0, pageHeight, {behavior: 'smooth'});
  window.scrollBy({
    top: pageHeight,
    behavior: 'smooth'
  });
}

  return (
    <div className="home">
      <div className="homeleft">
        <a
          href="https://www.instagram.com/beneaththesunrays/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="brandcont"
        >
          <div
            style={{ display: window.innerWidth > 830 ? "none" : "block" }}
            className="brand"
          ></div>
        </a>

        <Fade bottom cascade duration={duration}>
          <div
            style={{ marginTop: "-6em", textAlign: "center" }}
            className="insta-tag"
          >
            <div>Come, I will take you to the world of positive vibes 🌻</div>
            <div style={{ marginTop: "0em" }} className="insta-home">
              <a
                href="https://www.instagram.com/beneaththesunrays/?hl=en"
                target="_blank"
                rel="noreferrer"
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
            <a
              href="https://www.instagram.com/beneaththesunrays/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <div className="home-title">
                <img src={title} alt="" />
              </div>
            </a>
            <div className="tag">Because every ray comes with a hope...</div>
          </div>
        </Fade>

        {window.innerWidth < 1024 && (
          <>
            <div className="arrow bounce" onClick={scrolldown}></div>
            <div className="arrow2 bounce" onClick={scrolldown}></div>
          </>
        )}
      </div>

      <div className="homeright">
        <Fade right duration={duration}>
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
                  <div
                    className="car-img-1"
                    style={{ backgroundImage: `url(${img.data.imgUrl})` }}
                  ></div>
                </div>
              ))}
            </Carousel>
          </div>
        </Fade>
      </div>
    </div>
  );
}
