import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { db } from "../firebase";

export default function CategoryPage() {
  let { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [catposts, setCatPosts] = useState([]);

  const setcategoriesfunc = (posts) => {
    let newposts = [];
    for (let i in posts) {
      if (posts[i].data.categories.includes(id)) {
        newposts.push(posts[i]);
      }
      console.log(posts[i]);
    }
    setCatPosts(newposts);
    console.log(catposts);
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
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (posts) {
      setcategoriesfunc(posts);
    }
  }, [posts]);

  return (
    <div className="cat-page">
      <div className="abt-left">
        <a href="/">
          <ArrowBackIcon className="back" />
          Back
        </a>
      </div>

      <div className="cat-right">
        {catposts.length !== 0 ? (
          <div>
            <div className="title-cont">
              <div className="blog-title">{id}</div>
            </div>

            {catposts?.map((post) => (
              <div className="cat-post-cont">
                <a href={`/blogs/`} href={`/blogs/${post.id}`}>
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
                        <div>... Read more</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="blog-loading">Loading...</div>
        )}
      </div>
    </div>
  );
}
