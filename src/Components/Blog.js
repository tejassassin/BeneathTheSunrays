import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const categories = [
  "articles",
  "blogging",
  "fiction",
  "poems",
  "musings",
  "non-fiction",
  "open-letters",
  "short stories",
  "writings",
];

export default function Blog() {
  return (
    <div className="blog">
      <div className="blog-cont">
        <div className="blogtitle">Blog Posts</div>
        <div className="options">
          <div className="categories">
            <div className="title">Categories</div>
            <div className="cat-content">
              {categories.map((item) => {
                return <div className="cat-item">{item}</div>;
              })}
            </div>
          </div>
          <div className="tags">
            <div className="title">Tags</div>
            <div className="cat-content">
              {categories.map((item) => {
                return <div className="cat-item">{item}</div>;
              })}
            </div>
          </div>
        </div>
        <Carousel className="car-1" thumbWidth={200}>
          <div className="slide-1">
            <a href="/blogpage">
              <div className="post-cont"></div>
            </a>
            <a href="/blogpage">
              <div className="post-cont"></div>
            </a>
            <a href="/blogpage">
              <div className="post-cont"></div>
            </a>
          </div>

          <div className="slide-1">
            <a href="/blogpage">
              <div className="post-cont"></div>
            </a>
            <a href="/blogpage">
              <div className="post-cont"></div>
            </a>
            <a href="/blogpage">
              <div className="post-cont"></div>
            </a>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
