import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ScrollAnimation from "react-animate-on-scroll";

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

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [flag, setFlag] = useState(false);

  const [categories, setCategories] = useState([]);
  const [cat_posts, setCat_posts] = useState({});

  // console.log(posts);
  // console.log(categories[0]?.data?.categories);
  // console.log(cat_posts);
  useEffect(() => {
    let tmp = {};
    if (categories) {
      for (var cat in categories[0]?.data?.categories) {
        // var tmpcat={}
        
        tmp[categories[0]?.data?.categories[cat]["name"]] = [];
      }
    }

    if (posts && tmp) {
      console.log(tmp);
      for (let tmppost in posts) {
        for (let tmpcat in posts[tmppost]?.data?.categories) {
          // console.log(tmpcat)
          tmp[posts[tmppost]?.data?.categories[tmpcat]["name"]]?.push(posts[tmppost]);
        }
      }
      setCat_posts(tmp);
    }
  }, [categories, posts]);

  console.log(cat_posts);
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

  return (
    <div className="Blog-section">
      <div className="abt-left">
        <a href="/">
          <ArrowBackIcon className="back" />
          Back
        </a>
      </div>
      {cat_posts && (
        <div className="blog-sec-right">
          {Object.keys(cat_posts).map((key) => {
            if (!cat_posts[key]) {
              return <div></div>;
            } else {
              return (
                <div key={key}>
                  <div className="cat-name">{key}</div>
                  <div className="container">
                    <Swiper
                      navigation={true}
                      effect={"coverflow"}
                      centeredSlides={true}
                      slidesPerView={window.innerWidth < 768 ? 1 : 4}
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
                        <SwiperSlide>
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
                            <div>...</div>
                            <div className="sw-btn">Read More</div>
                          </Link>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

export default BlogSection;
