import React from "react";
import { Link } from "react-router-dom";

export default function Suggestions({ post }) {
  return (
    <Link
      key={post.data.title}
      style={{ textDecoration: "none" }}
      to={{
        pathname: `/blogs/${post.id}`,
      }}
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
              {/* <span>{post.data.desc}</span>
               */}
              <span>
                {post.data.desc.split("\n").map((paragraph, i) => {
                  return <p key={i}>{paragraph}</p>;
                })}
              </span>
            </div>
            {window.innerWidth < 530 ? (
              <div className="readmore">... Read </div>
            ) : (
              <div className="readmore">...Read more</div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
