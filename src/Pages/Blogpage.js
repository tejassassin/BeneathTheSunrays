import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useScrollIndicator } from "react-use-scroll-indicator";
import { useParams } from "react-router-dom";
import Fade from "react-reveal/Fade";
import idream from "../img/posts/i-dream.jpg";
import Footer from "../Components/Footer";
import Comment from "../Components/Comment";

import { db } from "../firebase";

export default function BlogPage() {
  let { id } = useParams();
  const [post, setPost] = useState(null);
  const [scroll, setScroll] = useState(0);

  // const [loading, setLoading] = useState(false);

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  window.addEventListener("scroll", onScroll);

  useEffect(() => {
    if (id) {
      db.collection("posts")
        .doc(id)
        .onSnapshot((snapshot) => {
          setPost(snapshot.data());
          console.log(snapshot.data());
        });
    }
    window.scrollTo(0, 0);
    // setInterval(() => setLoading(true), 4000);
  }, [id]);

  return (
    <div className="blog-cont">
      <div className="abt-left">
        <a href="/">
          <ArrowBackIcon className="back" />
          Back
        </a>
      </div>
      <Fade>
        <div className="blog-right">
          <div className="scroll-main">
            <div className="scroll-in" style={{width:`${scroll}%`}}></div>
          </div>
          {post !== null ? (
            <div>
              <Fade>
                <div className="title-cont">
                  <div className="blog-title">{post.title}</div>
                  <div className="sub-cont">
                    <div>
                      <div className="date">Published on : {post.date}</div>
                    </div>
                    <div className="cats">
                      {post.categories &&
                        post.categories.map((cat) => {
                          return <div className="cat">{cat["name"]}</div>;
                        })}
                    </div>
                  </div>
                </div>
              </Fade>
              <div className="blog-img">
                <img src={post.imgurl} alt="" />
              </div>
              <div className="blog-cont">
                <pre>
                  <span>{post.desc}</span>
                </pre>
                <Comment post={post} />
              </div>

              <Footer id="footer" />
            </div>
          ) : (
            <div className="blog-loading">Loading...</div>
          )}
        </div>
      </Fade>
    </div>
  );
}
