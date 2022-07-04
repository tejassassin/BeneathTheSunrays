import React, { useEffect, useState } from "react";

import Sidenav from "../Components/Sidenav";
import Home from "../Components/Home";
import About from "../Components/About";
import Newsletter from "../Components/Newsletter";
import Blog from "../Components/Blog";
import Podcasts from "../Components/Podcasts";
import Poetry from "../Components/Poetry";
import Footer from "../Components/Footer";
import Fade from "react-reveal/Fade";

import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import Suggestions from "../Components/Suggestions";
import { db } from "../firebase";

function HomePage() {
  const [showsrch, setShowsrch] = useState(false);
  const [search, setSearch] = useState("");
  const [searchposts, setSearchposts] = useState([]);

  const [posts, setPosts] = useState([]);
  const [popularPosts, setPopular_posts] = useState([]);
  const [pposts, setPposts] = useState([]);

  const [homeimgs, setHomeimgs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [readers, setReaders] = useState([]);
  const [videos, setVideos] = useState([]);
  const [poetry, setPoetry] = useState([]);


  // console.log(pposts);
  // console.log(popularPosts);

  const duration = window.innerWidth < 550 ? 500 : 700;

  const closeSearch = () => {
    setShowsrch(!showsrch);
    setSearch("")
  };
  const openSearch = () => {
    console.log("hi");
    setShowsrch(!showsrch);
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
    console.log(1);
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
    console.log(2);

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
      // console.log("tmp",tmp);
      setPposts(tmp);

    }
  }, [posts, popularPosts]);

  useEffect(() => {
    const unsubscribe = db.collection("poetry").onSnapshot((snapshot) =>
      setPoetry(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
      );
      console.log(3);

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = db.collection("videos").onSnapshot((snapshot) =>
      setVideos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    console.log(4);

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
    console.log(5);


    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = db.collection("readers").onSnapshot((snapshot) =>
      setReaders(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    console.log(6);


    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const unsubscribe = db.collection("homeimgs").onSnapshot((snapshot) =>
      setHomeimgs(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    console.log(7);

    return () => {
      unsubscribe();
    };
  }, []);



  const handleChange = (e) => {
    let input = e.target.value;
    setSearch(input);
    const results = posts.filter(
      (post) => post.data.title.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
    setSearchposts(results);
    console.log(searchposts);
  };

  const SrchResult = ({ post }) => {
    console.log(post);
    return (
      <div className="srch-res">
        <div className="srch-title-cont">
          <div className="srch-title">{post.data.title}</div>
          <div className="srch-publish">Published on : {post.data.date}</div>
        </div>
        <div className="srch-cat-cont">
          Categories :
          {post?.data?.categories?.map((cat) => (
            <div className="srch-cat">{cat.name}</div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Sidenav />

      <Fade duration={duration}>
        <div
          id="myOverlay"
          className="overlay"
          style={{ opacity: !showsrch && "0", display: !showsrch && "none" }}
        >
          <div className="closebtn" onClick={closeSearch} title="Close Overlay">
            <CancelRoundedIcon className="cancel-btn" />
          </div>
          <div className="overlay-content">
            <div className="searchcont">
              <input
                type="text"
                placeholder="Search by Title..."
                name="search"
                value={search}
                onChange={handleChange}
              />
              <SearchRoundedIcon className="searchbtn" />
            </div>
            <div className="sugs">
              <div className="sugs-title">
                {search.length > 0 ? "Suggestions" : "Popular Posts"}
              </div>

              {search.length > 0 ? (
                <div>
                  {searchposts.map((post, idx) => (
                    <a href={`/blogs/${post.id}`} key={idx}>
                      <SrchResult post={post} />
                    </a>
                  ))}
                </div>
              ) : (
                <div>
                  {pposts.map((post) => (
                    <Suggestions post={post} key={post.id} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Fade>

      <div className="homePage">
        <div className="search-cont" onClick={openSearch}>
          <SearchRoundedIcon className="search-btn" />
        </div>
        <Home id="home" homeimgs={homeimgs} duration={duration}/>
        <About id="about" duration={duration}/>
        <Newsletter id="newsletter" duration={duration}/>
        <Blog
          id="blog"
          posts={posts}
          categories={categories[0]?.data?.categories}
          readers={readers}
          duration={duration}
        />
        <Podcasts id="podcasts" videos={videos} duration={duration}/>
        {/* <Poetry id="insta" poetry={poetry} duration={duration}/> */}
        <Footer id="footer" pposts={pposts} duration={duration}/>
      </div>
    </div>
  );
}

export default HomePage;
