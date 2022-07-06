import React, { useEffect, useState} from "react";
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

import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import CardDeck from "../Components/CardDeck";
import { useHistory, useParams } from "react-router-dom";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);


function BlogSection({data}) {
  const [cat_posts, setCat_posts] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [projects, setProjects] = useState([]);
  const [projects1, setProjects1] = useState([]);
  const history = useHistory();

  // let scroll_style = {height:"100vh", overflow:"hidden"};
  
  let { id } = useParams();

  const duration = window.innerWidth < 550 ? 500 : 700;


  useEffect(() => {
    const scroll = (cat_posts) => {
      let section = null;
      if (id === "thought_catalogue") {
        section = document.querySelector("#thought_catalogue");
      } else {
        section = document.querySelector("#conversations");
      }

      if (section && cat_posts) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if(id){
      scroll(cat_posts);
    }
    
  }, [cat_posts, id]);

  useEffect(() => {
    var projs1 = [];
    var projs2 = [];

      data?.slides.forEach((pro) => {
        if (pro.data.imgs.length === 1) {
          projs1.push(pro);
        } else {
          projs2.push(pro);
        }
      });

      setProjects(projs1);
      setProjects1(projs2);

  },[data]);



  useEffect(() => {
    let tmp = {};
    if (data?.categories) {
      for (var cat in data?.categories[0]?.data?.categories) {
        tmp[data?.categories[0]?.data?.categories[cat]["name"]] = [];
      }
    }

    if (data?.posts && tmp) {
      // console.log(tmp);
      for (let tmppost in data?.posts) {
        for (let tmpcat in data?.posts[tmppost]?.data?.categories) {
          tmp[data?.posts[tmppost]?.data?.categories[tmpcat]["name"]]?.push(
            data?.posts[tmppost]
          );
        }
      }
      setCat_posts(tmp);
    }
  }, [data?.categories, data?.posts]);



  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="Blog-section">
      <div className="abt-left">
        <div onClick={() => history.goBack()} className="backcont">
          <ArrowBackIcon className="back" />
          Back
        </div>
      </div>

      {/* style={!scroll ? scroll_style :{}} */}
      
      {cat_posts ? (
        <div className="blog-sec-right" >
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
                            <Link
                              key={tmp.data.title}
                              className="link"
                              style={{ textDecoration: "none" }}
                              to={{
                                pathname: `/blogs/${tmp.id}`,
                              }}
                            >
                        <div className="sw-btn">Read More</div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            );
          })}

          {cat_posts && (
            <div>
              <div id="thought_catalogue"></div>
              <br />
              <br />

              <Fade bottom cascade duration={duration}>
                <div className="cat-name" id="thought_catalogue">
                  Thought Catalogue
                </div>
              </Fade>

              <CardDeck projects={projects} ></CardDeck>

              <div id="conversations"></div>
              <br />

              <Fade bottom cascade duration={duration}>
                <div className="cat-name" >
                  Conversations
                </div>
              </Fade>

              <CardDeck projects={projects1} ></CardDeck>
            </div>
          )}

          {!loading && <Footer id="footer" pposts={data?.pposts} />}
        </div>
      ) : (
        <div className="blog-loading">Loading...</div>
      )}
    </div>
  );
}

export default BlogSection;
