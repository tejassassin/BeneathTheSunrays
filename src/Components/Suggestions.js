import React from "react";

export default function Suggestions({ post }) {
  return (
    <a
      href={`/blogs/${post.id}`}
    >
      <div className="sug-cont">
        <div className="sug-left">
          <div
            className="img"
            style={{ backgroundImage: `url(${post.data.imgurl})` }}
          ></div>
        </div>
        <div className="sug-right">
          <div className="sug-title">{post.data.title}</div>
          <div className="sug-text">
            <div className="sug-text-cont">
              <span>{post.data.desc}</span>
            </div>
            <div className="readmore">... Read more</div>
          </div>
        </div>
      </div>
    </a>
  );
}
