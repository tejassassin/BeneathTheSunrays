import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import LaunchIcon from "@material-ui/icons/Launch";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

const responsive_reader = {
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

export default function Blog({ posts, categories, readers }) {
  return (
    <div className="blog">
      <div className="blog-cont">
        <div className="section-title">Blog Posts</div>
        <div className="section-subtitle">Kahaniyaan : Choti aur Badhi</div>

        <Carousel
          className="car-1"
          emulateTouch
          infiniteLoop
          thumbWidth={200}
          responsive={responsive}
        >
          {posts.map((post, index) => {
            return (
              <Fade right cascade key={index}>
                <div className="slide-1" key={index}>
                  <div className="link">
                    <div className="post-cont">
                      <div className="post-title">{post.data.title}</div>
                      <div
                        className="post-img"
                        style={{
                          backgroundImage: `url(${post.data.imgurl})`,
                        }}
                      ></div>
                      <div className="post-desc">
                        <span>{post.data.desc}</span>
                      </div>
                      <div style={{ fontSize: "1.2em" }}>...</div>
                      <Link
                        key={post.data.title}
                        style={{ textDecoration: "none" }}
                        to={{
                          pathname: `/blogs/${post.id}`,
                        }}
                      >
                        <div className="post-btn">Read more</div>
                      </Link>

                      <div className="socials">
                        <div className="icon-holder-post">
                          <a
                            href="https://www.instagram.com/beneaththesunrays/?hl=en"
                            target="_blank"
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
                          >
                            <img
                              src="https://img.icons8.com/color/48/fa314a/facebook-new.png"
                              alt="facebook"
                            />
                          </a>
                        </div>
                        <div className="icon-holder-post">
                          <a href="https://web.whatsapp.com/" target="_blank">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
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

        <a href="/BlogSection">
          <div className="blog-sec">
            <div className="blog-sec-title">
              Blog Section
              <LaunchIcon className="icon" />
            </div>
            <div className="blog-sec-tag">
              Khajane ki Peti/ Come let's see what i've in store for you.{" "}
            </div>
          </div>
        </a>

        <div className="options">
          <div className="categories">
            <div className="cat-title">Categories</div>
            <div className="cat-content">
              {categories?.map((item, i) => {
                return (
                  <a href={`/categories/${item.name}`} key={i}>
                    <div className="cat-item">{item["name"]}</div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="readers">
            <div className="cat-title">what our readers have to say..</div>
            <Carousel
              className="car-reader"
              autoPlay
              infinite
              emulateTouch
              infiniteLoop
              thumbWidth={200}
              responsive={responsive_reader}
            >
              {readers.map((reader) => (
                <div className="slide-abt" key={reader.id}>
                  <div
                    className="car-img-1"
                    style={{ backgroundImage: `url(${reader.data.imgUrl})` }}
                  ></div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
