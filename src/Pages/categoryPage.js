import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Fade from "react-reveal/Fade";

import Footer from "../Components/Footer";

export default function CategoryPage({data}) {
  let { id } = useParams();
  const [catposts, setCatPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const history = useHistory();

  const setcategoriesfunc = (posts) => {
    let newposts = [];
    for (let i in data?.posts) {
      for (var post in data?.posts[i].data.categories)
        if (data?.posts[i].data.categories[post].name === id) {
          newposts.push(posts[i]);
        }
      // console.log(posts[i]);
    }
    setCatPosts(newposts);
    // console.log(catposts);
  };



  useEffect(() => {
    if (data?.posts) {
      setcategoriesfunc(data?.posts);
      console.log(18)
    }
  }, [data?.posts]);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="cat-page">
      <div className="abt-left">
        <div onClick={() => history.goBack()} className="backcont">
          <ArrowBackIcon className="back" />
          Back
        </div>
      </div>

      {!loading ? (
        <div className="cat-right">
            <div className="title-cont">
              <Fade bottom cascade>
                <div className="blog-title">{id}</div>
              </Fade>
            </div>

            <div>
              {catposts?.map((post, idx) => (
                <div key={idx} className="cat-post-cont">
                  <Fade>

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
                                <div  className="readmore">...Read more</div>
                                )}
                          </div>
                        </div>
                      </div>
                    </a>
                                </Fade>
                </div>
              ))}
            </div>

          {!loading && <Footer id="footer" pposts={data?.pposts} />}

        </div>

      ) : (
        <div className="blog-loading"> Loading...</div>
      )}
    </div>
  );
}
