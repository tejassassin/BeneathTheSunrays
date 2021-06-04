import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import PlayCircleOutlineRoundedIcon from "@material-ui/icons/PlayCircleOutlineRounded";
import PauseCircleOutlineRoundedIcon from "@material-ui/icons/PauseCircleOutlineRounded";
import Fade from "react-reveal/Fade";

import { videos } from "../Components/Data";
import { Height, PostAddTwoTone } from "@material-ui/icons";

export default function Audio() {
  const [currvideo, setCurrvideo] = useState(-1);
  const [vidsrc, setVidsrc] = useState("");

  const [playing, setPlaying] = useState(false);
  const vidref = useRef();
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

    // setPlaying(false);
  };

  return (
    <div>
      <Fade bottom cascade>
        <div className="audio">
          <div className="section-title">Audio</div>
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
          <Carousel className="car-aud" thumbWidth={200}>
            {newposts.map((postslice, index) => {
              return (
                <Fade right cascade key={index}>
                  <div className="slide-3" >
                    {postslice.map((post) => {
                      return (
                        <div className="carvid-cont" key={post.id}>
                          <PlayCircleOutlineRoundedIcon
                            className="car-play-btn"
                            name={post.id}
                            onClick={handlecarClick}
                          />

                          {/* <video
                            name={post.id}
                            className="car-video"
                            loop
                            preload="none"
                            // muted
                            onClick={handlecarClick}
                          >
                            <source src={vidsrc} type="video/mp4" />
                          </video> */}

                          <div
                            name={post.id}
                            className="car-video"
                            onClick={handlecarClick}
                          >
                            <img
                              src={post.img}
                              alt=""
                              style={{ height: "100%", width: "auto" }}
                            />
                          </div>
                        </div>
                      );
                    })}
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
