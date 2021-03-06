import React, { useState, useLayoutEffect} from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Fade from "react-reveal/Fade";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../Components/Footer";

import { useHistory } from "react-router-dom";

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

export default function AboutPage({data}) {
  const [scroll, setScroll] = useState(0);

  const history = useHistory();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  const duration = window.innerWidth < 550 ? 500 : 700;

    // if (data?.posts && data?.popularPosts) {
    //   let tmp = [];
    //   for (let tmp_id in data?.popularPosts[0]?.data?.popular) {
    //     for (let post in data?.posts) {
    //       if (data?.posts[post].id === data?.popularPosts[0]?.data?.popular[tmp_id]) {
    //         tmp.push(data?.posts[post]);
    //       }
    //     }
    //   }
    //   setPposts(tmp);
    // }

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };


  window.addEventListener("scroll", onScroll);
  return (
    <div className="abt-cont">
      <div className="abt-left">
        <div onClick={() => history.goBack()} className="backcont">
          <ArrowBackIcon className="back" />
          Back
        </div>
      </div>
      
      <Fade duration={duration}>
        <div className="abt-right">
          <div>

            <div className="scroll-main">
              <div className="scroll-in" style={{ width: `${scroll}%` }}></div>
            </div>
            <Fade bottom cascade duration={duration}>
              <div className="abt-title">My Story...</div>
            </Fade>

            <div className="abt-car">
              <Carousel
                className="car-abt"
                autoPlay
                infinite
                emulateTouch
                infiniteLoop
                thumbWidth={200}
                responsive={responsive}
              >
                <div className="slide-abt">
                  <div className="car-img-3"></div>
                </div>
                <div className="slide-abt">
                  <div className="car-img-5"></div>
                </div>
                <div className="slide-abt">
                  <div className="car-img-4"></div>
                </div>
                <div className="slide-abt">
                  <div className="car-img-1"></div>
                </div>
                <div className="slide-abt">
                  <div className="car-img-2"></div>
                </div>
                <div className="slide-abt">
                  <div className="car-img-6"></div>
                </div>
                <div className="slide-abt">
                  <div className="car-img-7"></div>
                </div>
                <div className="slide-abt">
                  <div className="car-img-8"></div>
                </div>
                <div className="slide-abt">
                  <div className="car-img-9"></div>
                </div>
              </Carousel>
            </div>
            <div className="abt-desc">
              Hi, I???m Sakshi. So happy to have you here. <br />
              If asked to talk about myself in some few words, this is what I
              would tell you.
              <br />
              <br /> Simplicity is how I describe myself.
              <br /> Through little things, I capture most of my memories.
              <br /> I have the power to play with words and arrange a crossword
              to reflect an idea in your mind.
              <br /> I come from Kathmandu, Nepal and I believe Kathmandu to be
              one of the most beautiful place in the world.
              <br />
              To impress, ask for a coffee date.
              <br /> Often vulnerable, mostly kind.
              <br />
              Loves reading Sidney Sheldon.
              <br /> Waiting for a letter from Hogwarts.
              <br /> On days when everything seems off, all I do is stay in bed,
              watch F.R.I.E.N.D.S and listen to Coldplay on loop till I feel
              better.
              <br />
              <br /> I believe every day has a new hope acting as a ray in our
              life, So speaks the title, BeneathTheSunRays.
              <br /> BeneathTheSunRays is a creative writing blog that deals
              with simple writings; writings that all of us can comprehend and
              relate to. The primary motto of the blog is to spread positivity
              around through words.
              <br />
              <br /> My tone of voice: I will never be found saying happy but
              happppppy. I get excited about little things and I can???t seem to
              hide my excitement. I have a special place in my heart for people
              who say yesssss, instead of yes. Most of the times, you will find
              me exaggerating over words and laughing my heart out.
              <br />
              <br />
              <p style={{ color: "#ffa351", fontWeight: "600" }}>
                Warmest,
                <br /> S
              </p>
            </div>
            <Footer id="footer" pposts={data?.pposts} />
          </div>

        {/* ) : (
          <div className="blog-loading">Loading...</div>
        )} */}
          </div>
      </Fade>
    </div>
  );
}
