import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useParams } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Footer from "../Components/Footer";
import Comment from "../Components/Comment";

import { db } from "../firebase";

export default function BlogPage() {
  let { id } = useParams();
  const [post, setPost] = useState(null);

  const [posts, setPosts] = useState([]);
  const [popularPosts, setPopular_posts] = useState([]);
  const [pposts, setPposts] = useState([]);
  const [ispoem, setIspoem] = useState(null);

  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  window.addEventListener("scroll", onScroll);

  // console.log(post)

  useEffect(() => {
    if (id) {
      db.collection("posts")
        .doc(id)
        .onSnapshot((snapshot) => {
          setPost(snapshot.data());
          console.log(snapshot.data());
          if (snapshot.data().categories.find((x) => x.name === "Poems")) {
            setIspoem(true);
            // console.log(ispoem)
          }
        });
    }
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const unsubscribe = db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = db.collection("popular_posts").onSnapshot((snapshot) =>
      setPopular_posts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (posts && popularPosts) {
      let tmp = [];
      for (let tmp_id in popularPosts[0]?.data?.popular) {
        for (let post in posts) {
          if (posts[post].id === popularPosts[0]?.data?.popular[tmp_id]) {
            tmp.push(posts[post]);
          }
        }
      }
      setPposts(tmp);
    }
  }, [posts, popularPosts]);

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
            <div className="scroll-in" style={{ width: `${scroll}%` }}></div>
          </div>
          {post !== null ? (
            <div className="blog-right-child">
              <Fade>
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
                    {post.desc.split("\n").map((paragraph) => {
                      return (
                        paragraph === "" ?(
                          <br/>
                        ):(
                          <p>{paragraph}</p>
                          )
                      );
                    })}
              </span>

                <Comment post={post} />
              </div>
              
                {/* {ispoem === true ? (
                  <span>
                    {post.desc.split("\n").map((paragraph) => {
                      return <p>{paragraph}</p>;
                    })}
                  </span>
                ) : (
                  <span>
                    {post.desc.split("\n").map((paragraph) => {
                      return (
                        paragraph === "" ?(
                          <br/>
                        ):(
                          <p>{paragraph}</p>
                          )
                      );
                    })}
                  </span>
                )} */}

              <Footer id="footer" pposts={pposts} />
            </div>
          ) : (
            <div className="blog-loading">Loading...</div>
          )}
        </div>
      </Fade>
    </div>
  );
}
