import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Blog() {
  return (
    <div className="blog">
      <div className="blog-cont">
        <div className="blogtitle">Blog Posts</div>
        <div className="options">
          <div className="categories">categories </div>
          <div className="tags">tags</div>
        </div>
        <Carousel className="car-1" thumbWidth={200}>
          <div className="slide-1">
            <div className="post-cont"></div>
            <div className="post-cont"></div>
            <div className="post-cont"></div>
          </div>
          <div className="slide-1">
            <div className="post-cont"></div>
            <div className="post-cont"></div>
            <div className="post-cont"></div>
          </div>
          <div className="slide-1">
            <div className="post-cont"></div>
            <div className="post-cont"></div>
            <div className="post-cont"></div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
