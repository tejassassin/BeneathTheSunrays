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
import CardDeck from "../Components/CardDeck";


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



  useEffect(() => {

    var projs = []
    var projs1 = []
    var projs2 = []

    const unsubscribe = db.collection("slides").onSnapshot((snapshot) =>
      {
      projs = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
 
      projs.forEach((pro)=>{
          if(pro.data.imgs.length === 1){
            projs1.push(pro)
          }
          else{
            projs2.push(pro)
          }
      })

      setProjects(projs1)
      setProjects1(projs2)

      
      }
    );

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
                    slidesPerView={window.innerWidth < 769 ? (window.innerWidth < 550  ? 1:3) : 4}
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
                      <SwiperSlide 
                      key={tmp.data.title}
                      
                      >
                        <Link
                          key={tmp.data.title}
                          className="link"
                          style={{ textDecoration: "none" }}
                          to={{
                            pathname: `/blogs/${tmp.id}`,
                          }}
                        >
                          {/* <Fade > */}
                          <div className="sw-title">{tmp.data.title}</div>
                          <div
                            className="sw-img"
                            style={{
                              backgroundImage: `url(${tmp.data.imgurl})`,
                            }}
                          ></div>
                          <div className="sw-text">{tmp.data.desc}</div>
                          {/* <div className="sw-text1">...</div> */}
                          <div className="sw-btn">Read More</div>
                          {/* </Fade > */}
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

            );
          })}
         <div className="cat-name">Thought Catalogue</div>

          {cat_posts && 
          <CardDeck projects={projects}></CardDeck>
          }
          <div className="cat-name">Conversations</div>

          {cat_posts && 
          <CardDeck projects={projects1}></CardDeck>
          }


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
