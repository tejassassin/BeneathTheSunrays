import React, { useState, useEffect, useRef } from "react";
// import { Carousel } from "react-responsive-carousel";
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
  height: "400",
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
  height: "400",
  width: "600",
  playerVars: {
    autoplay: 1,
  },
};

export default function Poetry({ poetry }) {
  // useEffect(() => {

  // }, []);

  const [dims, setDims] = useState({});

  const titleRef = useRef();

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
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
                <div className="slide-2" key={vid.vid_id}>
                  <div className="poetry-cont">
                    <div className="vid-title">{vid.title}</div>
                    <YouTube videoId={vid.vid_id} opts={dims} onReady={_onReady} />
                  </div>
                </div>
              ))
            )}

            {/* <div className="slide-2">
              <div className="poetry-cont">
                <div className="vid-title">Title</div>
                <YouTube videoId="_nBlN9yp9R8" opts={dims} onReady={_onReady} />
              </div>
            </div>

            <div className="slide-2">
              <div className="poetry-cont">
                <div className="vid-title">Title</div>

                <YouTube videoId="_nBlN9yp9R8" opts={dims} onReady={_onReady} />
              </div>
            </div> */}
          </Carousel>
        </div>
      </Fade>
    </div>
  );
}

// <div
// style={{
//   display: "flex",
//   justifyContent: "center",
// }}
// >
// <div className="socials">
//   <div className="icon-holder-post">
//     <a href="/in">
//       <img
//         src="https://img.icons8.com/fluent/48/fa314a/instagram-new.png"
//         alt="instagran"
//       />
//     </a>
//   </div>
//   <div className="icon-holder-post">
//     <a href="/fb">
//       <img
//         src="https://img.icons8.com/color/48/fa314a/facebook-new.png"
//         alt="facebook"
//       />
//     </a>
//   </div>
//   <div className="icon-holder-post">
//     <a href="/in">
//       <img
//         src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
//         alt="whatsapp"
//       />
//     </a>
//   </div>
// </div>
// </div>
