import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { db } from "../firebase";
import Fade from "react-reveal/Fade";

import Footer from "../Components/Footer";

export default function CategoryPage() {
  let { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [catposts, setCatPosts] = useState(null);
  const [popularPosts, setPopular_posts] = useState([]);
  const [pposts, setPposts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const history = useHistory();

  const setcategoriesfunc = (posts) => {
    let newposts = [];
    for (let i in posts) {
      for (var post in posts[i].data.categories)
        if (posts[i].data.categories[post].name === id) {
          newposts.push(posts[i]);
        }
      // console.log(posts[i]);
    }
    setCatPosts(newposts);
    setLoading(false)
    // console.log(catposts);
  };

  useEffect(() => {
    const unsubscribe = db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    console.log(16);

    return () => {
      unsubscribe();
    };
  }, [posts]);

  useEffect(() => {
    if (posts) {
      setcategoriesfunc(posts);
    }
  }, [posts]);

  useEffect(() => {
    const unsubscribe = db.collection("popular_posts").onSnapshot((snapshot) =>
      setPopular_posts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    console.log(17);
    return () => {

      unsubscribe();
    };
  }, [popularPosts]);

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

  // useEffect(() => {
  //   setInterval(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  return (
    <div className="cat-page">
      <div className="abt-left">
        <div onClick={() => history.goBack()} className="backcont">
          <ArrowBackIcon className="back" />
          Back
        </div>
      </div>

      {posts && !loading ? (
        <div className="cat-right">
            <div className="title-cont">
              <Fade bottom cascade>
                <div className="blog-title">{id}</div>
              </Fade>
            </div>

            <div>
              {catposts?.map((post, idx) => (
                <div key={idx} className="cat-post-cont">
                  {/* <Fade> */}
                    <a href={`/blogs/${post.id}`}>
                      <div className="sug-cont">
                        <div className="sug-left">
                          <div
                            className="img"
                            style={{
                              backgroundImage: `url(${post.data.imgurl})`,
                            }}
                          ></div>
                        </div>
                        <div className="sug-right">
                          <div className="sug-title">{post.data.title}</div>
                          <div className="sug-text">
                            <div className="sug-text-cont">
                              <span>{post.data.desc}</span>
                            </div>

                            {window.innerWidth < 530 ? (
                              <div className="readmore">... Read </div>
                            ) : (
                              <div className="readmore">...Read more</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </a>
                  {/* </Fade> */}
                </div>
              ))}
            </div>

          {!loading && <Footer id="footer" pposts={pposts} />}

        </div>
      ) : (
        <div className="blog-loading">Loading...</div>
      )}
    </div>
  );
}
