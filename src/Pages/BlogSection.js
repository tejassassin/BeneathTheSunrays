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
import Fade from "react-reveal/Fade";

import { db } from "../firebase";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import CardDeck from "../Components/CardDeck";
import { useHistory } from "react-router-dom";


SwiperCore.use([EffectCoverflow, Pagination, Navigation]);


// const projects = [
//   {name:"Teja", img:[bg]},
//   {name:"Teja", img:[bg]},
//   {name:"Teja", img:[bg2]},
//   {name:"Teja", img:[bg2]},
//   ]
//   const projects1 = [
//     {name:"Teja", img:[bg, bg2]},
//     {name:"Teja", img:[bg2,bg,bg2]},
//     {name:"Teja", img:[bg2,bg]},
//     {name:"Teja", img:[bg2,bg]},

//     ]

function BlogSection() {
  const [categories, setCategories] = useState([]);
  const [cat_posts, setCat_posts] = useState(null);

  const [posts, setPosts] = useState([]);
  // const [slides, setSlides] = useState([]);

  const [popularPosts, setPopular_posts] = useState([]);
  const [pposts, setPposts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [projects, setProjects] = useState([]);
  const [projects1, setProjects1] = useState([]);
  const history = useHistory();


  const duration = window.innerWidth < 550 ? 500 : 700;


  useEffect(() => {
    var projs = [];
    var projs1 = [];
    var projs2 = [];

    const unsubscribe = db.collection("slides").onSnapshot((snapshot) => {
      projs = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      projs.forEach((pro) => {
        if (pro.data.imgs.length === 1) {
          projs1.push(pro);
        } else {
          projs2.push(pro);
        }
      });

      setProjects(projs1);
      setProjects1(projs2);
    });

    console.log(12);
    console.log(projs1);


    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    console.log(13);

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

    console.log(14);

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
    console.log(15);

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
      <div  onClick={()=> history.goBack()} className="backcont">
          <ArrowBackIcon className="back" />
          Back
        </div>
      </div>
      {cat_posts && !loading ? (
        <div className="blog-sec-right">
          {Object.keys(cat_posts).map((key) => {
            return (
              <div key={key} className="cat">
                <Fade bottom cascade duration={duration}>
                  <div className="cat-name">{key}</div>
                </Fade>
                <Swiper
                  navigation={true}
                  effect={"coverflow"}
                  centeredSlides={true}
                  style={{ margin: "1em 0", padding: "2em 0 3em 0" }}
                  slidesPerView={
                    window.innerWidth < 769
                      ? window.innerWidth < 550
                        ? 1
                        : 3
                      : 4
                  }
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
                    <SwiperSlide key={tmp.data.title}>
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
                        <div className="sw-text">
                          {/* {tmp.data.desc} */}
                          <span>
                            {tmp.data.desc.split("\n").map((paragraph, i) => {
                              return <p key={i}>{paragraph}</p>;
                            })}
                          </span>
                        </div>
                        <div className="sw-btn">Read More</div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            );
          })}

          {cat_posts && !loading && (
              <div>
                <Fade bottom cascade duration={duration}>
                  <div className="cat-name">Thought Catalogue</div>
                </Fade>

              <CardDeck projects={projects}></CardDeck>

                <Fade bottom cascade duration={duration}>
                  <div className="cat-name">Conversations</div>
                </Fade>

              
                  <CardDeck projects={projects1}></CardDeck>
                
              </div>
              )}

          {!loading && <Footer id="footer" pposts={pposts} />}
        </div>
      ) : (
        <div className="blog-loading">Loading...</div>
      )}
    </div>
  );
}

export default BlogSection;
