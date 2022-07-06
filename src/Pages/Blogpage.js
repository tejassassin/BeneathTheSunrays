import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useParams } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Footer from "../Components/Footer";
import Comment from "../Components/Comment";
import { useHistory } from "react-router-dom";

import { db } from "../firebase";

export default function BlogPage({ data }) {
  let { id } = useParams();
  const [post, setPost] = useState(null);

  const [scroll, setScroll] = useState(0);
  const history = useHistory();

  const duration = window.innerWidth < 550 ? 500 : 700;


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
        });
      // let p = data?.posts.find((post) => post.id === id)
      // setPost(p?.data)
      // console.log(p?.data)

      // console.log((data?.posts.find((post) => post.id === id)))

    }
    window.scrollTo(0, 0);
    console.log(9);
  }, [id, data]);

  return (
    <div className="blog-cont">
      <div className="abt-left">
        <div onClick={() => history.goBack()} className="backcont">
          <ArrowBackIcon className="back" />
          Back
        </div>
      </div>
      <Fade duration={duration}>
        <div className="blog-right">
          <div className="scroll-main">
            <div className="scroll-in" style={{ width: `${scroll}%` }}></div>
          </div>
          {post ? (
            <div className="blog-right-child">
              <Fade duration={duration}>
                <div className="title-cont">
                  <div className="blog-title">{post.title}</div>
                  <div className="sub-cont">
                    <div>
                      <div className="date">Published on : {post.date}</div>
                    </div>
                    <div className="cats">
                      {post.categories &&
                        post.categories.map((cat, i) => {
                          return (
                            <div key={i} className="cat">
                              {cat["name"]}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </Fade>
              <div className="blog-img">
                <img src={post.imgurl} alt="" />
              </div>
              <div className="blog-cont1">
                <span>
                  {post.desc.split("\n").map((paragraph, i) => {
                    return paragraph === "" ? (
                      <br key={i} />
                    ) : (
                      <p key={i}>{paragraph}</p>
                    );
                  })}
                </span>

                <Comment post={post} />
              </div>

              {data?.pposts && <Footer id="footer" pposts={data?.pposts} />}
            </div>
          ) : (
            <div className="blog-loading">Loading...</div>
          )}
        </div>
      </Fade>
    </div>
  );
}
