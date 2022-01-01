import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";

import { db } from "../firebase";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function BlogSection() {
  const [categories, setCategories] = useState([]);
  const [cat_posts, setCat_posts] = useState(null);

  const [posts, setPosts] = useState([]);
  const [popularPosts, setPopular_posts] = useState([]);
  const [pposts, setPposts] = useState([]);
  const [loading, setLoading] = useState(true);


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

  useEffect(() => {
    let tmp = {};
    if (categories) {
      for (var cat in categories[0]?.data?.categories) {
        tmp[categories[0]?.data?.categories[cat]["name"]] = [];
      }
    }

    if (posts && tmp) {
      console.log(tmp);
      for (let tmppost in posts) {
        for (let tmpcat in posts[tmppost]?.data?.categories) {
          tmp[posts[tmppost]?.data?.categories[tmpcat]["name"]]?.push(
            posts[tmppost]
          );
        }
      }
      setCat_posts(tmp);
    }
  }, [categories, posts]);

  useEffect(() => {
    const unsubscribe = db.collection("categories").onSnapshot((snapshot) =>
      setCategories(
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
    setInterval(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="Blog-section">
      <div className="abt-left">
        <a href="/">
          <ArrowBackIcon className="back" />
          Back
        </a>
      </div>
      {(cat_posts && !loading) ? (
        <div className="blog-sec-right">
          {
          Object.keys(cat_posts).map((key) => {
            return (
              <div key={key} className="cat">
                <div className="cat-name">{key}</div>
                <div className="container">
                  <Swiper
                    navigation={true}
                    effect={"coverflow"}
                    centeredSlides={true}
                    slidesPerView={window.innerWidth < 769 ? (window.innerWidth < 361  ? 1:3) : 4}
                    loop={true}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    className="mySwiper"
                  >
                    {cat_posts[key].map((tmp) => (
                      <SwiperSlide >
                        <Link
                          key={tmp.data.title}
                          className="link"
                          style={{ textDecoration: "none" }}
                          to={{
                            pathname: `/blogs/${tmp.id}`,
                          }}
                        >
                          <div className="sw-title">{tmp.data.title}</div>
                          <div
                            className="sw-img"
                            style={{
                              backgroundImage: `url(${tmp.data.imgurl})`,
                            }}
                          ></div>
                          <div className="sw-text">{tmp.data.desc}</div>
                          <div className="sw-text1">...</div>
                          <div className="sw-btn">Read More</div>
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            );
          })}
          {!loading && <Footer id="footer" pposts={pposts} />
          }
        </div>
      ):(
        <div className="blog-loading" >
          Loading...
        </div>
      )
    
    }
    </div>
  );
}

export default BlogSection;
