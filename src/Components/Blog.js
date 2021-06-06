import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import { Carousel } from "react-responsive-carousel";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { posts } from "../Components/Data";
import Fade from "react-reveal/Fade";

const categories = [
  "articles",
  "blogging",
  "fiction",
  "poems",
  "musings",

  "musings",
];

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

const tags = ["articles", "blogging", "fiction", "poems", "musings"];

export default function Blog() {
  console.log(posts);
  const [newposts, setNewposts] = useState([]);

  useEffect(() => {
    let newPosts = [];
    let tmp = [];
    for (let i in posts) {
      if (i % 3 == 0) {
        if (i != 0) {
          newPosts.push(tmp);
        }
        tmp = [];
        tmp.push(posts[i]);
        if (i == posts.length - 1) {
          newPosts.push(tmp);
        }
      } else {
        tmp.push(posts[i]);
      }
    }

    // console.log(newPosts);
    setNewposts(newPosts);
  }, []);

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
                  <a
                    key={post.title}
                    href={`/blogs/${post.title}`}
                    className="link"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="post-cont">
                      <div className="post-title">{post.title}</div>
                      <div className="post-img"></div>
                      <div className="post-desc">
                        <pre>
                          <span>{post.desc}</span>
                        </pre>
                      </div>
                      <div style={{ fontSize: "1.2em" }}>...</div>
                      <div className="post-btn">Read more</div>
                      <div className="socials">
                        <div className="icon-holder-post">
                          <a href="/in">
                            <img src="https://img.icons8.com/fluent/48/fa314a/instagram-new.png" />
                          </a>
                        </div>
                        <div className="icon-holder-post">
                          <a href="/fb">
                            <img src="https://img.icons8.com/color/48/fa314a/facebook-new.png" />
                          </a>
                        </div>
                        <div className="icon-holder-post">
                          <a href="/in">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </Fade>
            );
          })}
        </Carousel>

        <div className="options">
          <div className="categories">
            <div className="cat-title">Categories</div>
            <div className="cat-content">
              {tags.map((item) => {
                return <div className="cat-item">{item}</div>;
              })}
            </div>
          </div>
          <div className="tags">
            {/* <div className="cat-title">Tags</div>
            <div className="cat-content">
              {categories.map((item) => {
                return <div className="cat-item">{item}</div>;
              })}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
