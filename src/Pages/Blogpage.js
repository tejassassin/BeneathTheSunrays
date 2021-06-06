import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { useParams } from "react-router-dom";
import { posts } from "../Components/Data";
import Fade from "react-reveal/Fade";
import idream from "../img/posts/i-dream.jpg";

export default function BlogPage() {
  let { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    for (let i in posts) {
      if (posts[i].title === id) {
        setPost(posts[i]);
        console.log(posts[i].img);
        console.log(typeof posts[i].img);
      }
    }
  }, []);

  return (
    <div className="blog-cont">
      <div className="abt-left">
        <a href="/">
          <ArrowBackIcon className="back" />
          Back
        </a>
      </div>

      <div className="blog-right">
        <Fade bottom cascade>
          <div className="abt-title">{post.title}</div>
        </Fade>
        <div className="blog-img">
          {/* <img src={require(post.img)} alt="" /> */}
          <img src={"../img/posts/i-dream.jpg"} alt="" />
        </div>
        <div className='blog-cont'>
          <pre>
            <span>{post.desc}</span>
          </pre>
        </div>
      </div>
    </div>
  );
}
