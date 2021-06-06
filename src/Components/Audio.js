import React, { useState, useEffect, useRef } from "react";
// import { Carousel } from "react-responsive-carousel";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import PlayCircleOutlineRoundedIcon from "@material-ui/icons/PlayCircleOutlineRounded";
import PauseCircleOutlineRoundedIcon from "@material-ui/icons/PauseCircleOutlineRounded";
import Fade from "react-reveal/Fade";

import { videos } from "../Components/Data";
import { Height, PostAddTwoTone } from "@material-ui/icons";

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
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Audio() {
  const [currvideo, setCurrvideo] = useState(-1);
  const [vidsrc, setVidsrc] = useState("");

  const [playing, setPlaying] = useState(false);
  const vidref = useRef();
  const titleRef = useRef();

  const [newposts, setNewposts] = useState([]);

  useEffect(() => {
    let newPosts = [];
    let tmp = [];
    for (let i in videos) {
      if (i % 2 == 0) {
        if (i != 0) {
          newPosts.push(tmp);
        }
        tmp = [];
        tmp.push(videos[i]);
        if (i == videos.length - 1) {
          newPosts.push(tmp);
        }
      } else {
        tmp.push(videos[i]);
        if (i == videos.length - 1) {
          newPosts.push(tmp);
        }
      }
    }

    console.log(newPosts);
    setNewposts(newPosts);
  }, []);

  useEffect(() => {
    for (let i in videos) {
      if (videos[i].id == currvideo) {
        setVidsrc(videos[i].src);
        console.log(videos[i].src);
      }
    }
  }, [currvideo]);

  useEffect(() => {
    if (vidref.current) {
      vidref.current.play();
      setPlaying(true);
    }
  }, [vidsrc]);

  const handleClick = (e) => {
    if (playing) {
      // e.target.pause();
      // vidref.current.pause();
      setPlaying(false);
    } else {
      // e.target.play();
      // vidref.current.play();

      setPlaying(true);
    }
  };

  const handlecarClick = (e) => {
    setCurrvideo(e.target.getAttribute("name"));
    console.log(e.target.getAttribute("name"));
    console.log(e.target);
    if (vidref.current) {
      titleRef.current.scrollIntoView({ behavior: "smooth" });
    }
    // setPlaying(false);
  };

  return (
    <div>
      <Fade bottom cascade>
        <div className="audio">
          <div className="section-title" ref={titleRef}>
            Podcasts
          </div>
          <div className="section-subtitle">Mujhe sunna pasand karoge ?</div>
          {currvideo === -1 ? (
            ""
          ) : (
            <div className="audio-cont">
              {/* <Fade right> */}
              <div className="audio-player">
                <div className="btn-cont">
                  {/* {playing && (
                <PauseCircleOutlineRoundedIcon
                  className="pause btn-icon"
                  onClick={handleClick}
                />
              )}
              {!playing && (
                <PlayCircleOutlineRoundedIcon
                  className="play btn-icon"
                  onClick={handleClick}
                />
              )} */}
                </div>
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
              {/* </Fade> */}
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
                  <div
                    className="slide-3"
                    name={vid.id}
                    onClick={handlecarClick}
                  >
                    <div className="carvid-cont" key={vid.id}>
                      <PlayCircleOutlineRoundedIcon
                        className="car-play-btn"
                        name={vid.id}
                        onClick={handlecarClick}
                      />
                      <div
                        name={vid.id}
                        className="car-video"
                        onClick={handlecarClick}
                      >
                        <img
                          src={vid.img}
                          alt=""
                          style={{ height: "95%", width: "auto" }}
                          name={vid.id}
                          onClick={handlecarClick}
                        />
                      </div>
                    </div>
                  </div>
                </Fade>
              );
            })}

            {/* <Fade right cascade>
              <div className="slide-3">
                <div className="carvid-cont">
                  <PlayCircleOutlineRoundedIcon
                    className="car-play-btn"
                    name={1}
                    onClick={handlecarClick}
                  />

                  <video
                    name={1}
                    className="car-video"
                    loop
                    preload="none"
                    // muted
                    onClick={handlecarClick}
                  >
                    <source src={vidsrc} type="video/mp4" />
                  </video>
                </div>
                <div className="carvid-cont">
                  <PlayCircleOutlineRoundedIcon
                    className="car-play-btn"
                    name={2}
                    onClick={handlecarClick}
                  />

                  <video
                    name={2}
                    className="car-video"
                    loop
                    preload="none"
                    // muted
                    onClick={handlecarClick}
                  >
                    <source src={vidsrc} type="video/mp4" />
                  </video>
                </div>
              </div>

              <div className="slide-3">
                <div className="carvid-cont">
                  <PlayCircleOutlineRoundedIcon
                    name={3}
                    className="car-play-btn"
                    onClick={handlecarClick}
                  />

                  <video
                    name={3}
                    className="car-video"
                    loop
                    preload="none"
                    // muted
                    onClick={handlecarClick}
                  >
                    <source src={vidsrc} type="video/mp4" />
                  </video>
                </div>
                <div className="carvid-cont">
                  <PlayCircleOutlineRoundedIcon
                    name={4}
                    className="car-play-btn"
                    onClick={handlecarClick}
                  />

                  <video
                    name={4}
                    className="car-video"
                    loop
                    preload="none"
                    // muted
                    onClick={handlecarClick}
                  >
                    <source src={vidsrc} type="video/mp4" />
                  </video>
                </div>
              </div>
            </Fade> */}
          </Carousel>
        </div>
      </Fade>
    </div>
  );
}
