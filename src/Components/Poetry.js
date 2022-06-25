import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import Fade from "react-reveal/Fade";
import YouTube from "react-youtube";

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

const opts = {
  height: "375",
  width: "600",
  playerVars: {
    autoplay: 1,
  },
};

const opts1 = {
  height: "400",
  width: "600",
  playerVars: {
    autoplay: 1,
  },
};

const opts2 = {
  height: "100",
  width: "200",
  playerVars: {
    autoplay: 1,
  },
};

export default function Poetry({ poetry }) {

  const [dims, setDims] = useState({});
  const titleRef = useRef();

  const _onReady = (event) => {
    event.target.pauseVideo();
  };
  // console.log(poetry);

  return (
    <div>
      <Fade bottom cascade>
        <div className="poetry">
          <div className="section-title" ref={titleRef}>
            Spoken Poetry
          </div>
          <div className="section-subtitle">Mujhe sunna pasand karoge ?</div>

          <Carousel
            className="car-insta"
            emulateTouch
            infiniteLoop
            thumbWidth={200}
            responsive={responsive}
          >
            {poetry.length === 0 ? (
              <div></div>
            ) : (
              poetry[0]?.data?.vid_id.map((vid) => (
              <Fade right cascade>

                <div className="slide-2" key={vid.vid_id}>
                  <div className="poetry-cont">
                    <div className="vid-title">{vid.title}</div>
                    <YouTube videoId={vid.vid_id} opts={opts} onReady={_onReady} />
                  </div>
                </div>
              </Fade>

              ))
            )}
          </Carousel>
        </div>
      </Fade>
    </div>
  );
}

