import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PlayCircleOutlineRoundedIcon from "@material-ui/icons/PlayCircleOutlineRounded";
import Fade from "react-reveal/Fade";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 650 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 650, min: 0 },
    items: 1,
  },
};

export default function Podcasts({ videos }) {
  const [currvideo, setCurrvideo] = useState(-1);
  const [vidsrc, setVidsrc] = useState("");

  const [playing, setPlaying] = useState(false);
  const vidref = useRef();
  const titleRef = useRef();

  useEffect(() => {
    for (let i in videos) {
      if (videos[i].id === currvideo) {
        setVidsrc(videos[i].data.fileUrl);
        console.log(videos[i].data.fileUrl);
      }
    }
  }, [currvideo, videos]);

  useEffect(() => {
    if (vidref.current) {
      vidref.current.play();
      setPlaying(true);
    }
  }, [vidsrc]);

  const handleClick = (e) => {
    if (playing) {
      setPlaying(false);
    } else {
      setPlaying(true);
    }
  };

  const handlecarClick = (id) => {
    setCurrvideo(id);
    if (vidref.current) {
      titleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Fade bottom cascade>
        <div className="podcasts">
        <Fade bottom cascade>
          <div className="section-title" ref={titleRef}>
            Podcasts
          </div>
          <div className="section-subtitle">Mujhe sunna pasand karoge ?</div>
        </Fade>
          {currvideo === -1 ? (
            ""
          ) : (
            <div className="podcasts-cont">
              <div className="podcasts-player">
                <div className="btn-cont"></div>
                <video
                  ref={vidref}
                  className="video"
                  loop
                  preload="none"
                  onClick={handleClick}
                  src={vidsrc}
                  controls
                  type="video/mp4"
                ></video>
              </div>
            </div>
          )}
          <Carousel
            className="car-aud"
            emulateTouch
            infiniteLoop
            thumbWidth={200}
            responsive={responsive}
          >
            {videos.map((vid, index) => {
              return (
                <Fade right cascade key={index}>
                  <div className="slide-3" key={vid.id}>
                    <div className="carvid-cont" key={vid.id}>
                      <div className="vid-title">{vid.data.vidname}</div>
                      <div
                        name={vid.id}
                        className="car-video"
                        onClick={() => handlecarClick(vid.id)}
                      >
                        <PlayCircleOutlineRoundedIcon
                          className="car-play-btn"
                          onClick={() => handlecarClick(vid.id)}
                        />
                        <img
                          src={vid.data.imgUrl}
                          alt=""
                          style={{ height: "95%", width: "auto" }}
                          onClick={() => handlecarClick(vid.id)}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <div className="socials">
                          <div className="icon-holder-post">
                            <a
                              href="https://www.instagram.com/beneaththesunrays/?hl=en"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src="https://img.icons8.com/fluent/48/fa314a/instagram-new.png"
                                alt="instagran"
                              />
                            </a>
                          </div>

                          <div className="icon-holder-post">
                            <a
                              href="https://www.facebook.com/beneaththesunrays.in"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <img
                                src="https://img.icons8.com/color/48/fa314a/facebook-new.png"
                                alt="facebook"
                              />
                            </a>
                          </div>
                          <div className="icon-holder-post">
                            <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
                              <img
                                src="https://www.freepnglogos.com/uploads/whatsapp-logo-app-png-4.png"
                                alt="whatsapp"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </Carousel>
        </div>
      </Fade>
    </div>
  );
}
