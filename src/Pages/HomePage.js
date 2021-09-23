import React, { useEffect, useState } from "react";
import Sidenav from "../Components/Sidenav";
import Home from "../Components/Home";
import About from "../Components/About";
import Blog from "../Components/Blog";
import Audio from "../Components/Audio";
import Newsletter from "../Components/Newsletter";
import Insta from "../Components/Insta";
import Contact from "../Components/Contact";

import Footer from "../Components/Footer";

import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import Suggestions from "../Components/Suggestions";
import { db } from "../firebase";

function HomePage() {
  const [showsrch, setShowsrch] = useState(false);
  const [search, setSearch] = useState("");

  const [posts, setPosts] = useState([]); 
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [readers, setReaders] = useState([]);
  const [homeimgs, setHomeimgs] = useState([]);

  const [searchposts, setSearchposts] = useState([]);

  const closeSearch = () => {
    setShowsrch(!showsrch);
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

  useEffect(() => {
    const unsubscribe = db.collection("readers").onSnapshot((snapshot) =>
      setReaders(
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
    const unsubscribe = db.collection("homeimgs").onSnapshot((snapshot) =>
      setHomeimgs(
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

  const handleChange = (e) => {
    let input = e.target.value;
    setSearch(input);
    const results = posts.filter(
      (post) => post.data.title.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
    setSearchposts(results);
  };

  const SrchResult = ({ post }) => (
    <div className="srch-res">
      <div className="srch-title-cont">
        <div className="srch-title">{post.data.title}</div>
        <div>Published on : {post.data.date}</div>
      </div>
      <div className="srch-cat-cont">
        Categories :
        {post?.data?.categories?.map((cat) => (
          <div className="srch-cat">{cat}</div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <Sidenav />

      <div
        id="myOverlay"
        className="overlay"
        style={{ opacity: !showsrch && "0", visibility: !showsrch && "hidden" }}
      >
        <div className="closebtn" onClick={closeSearch} title="Close Overlay">
          <CancelRoundedIcon className="cancel-btn" />
        </div>
        <div className="overlay-content">
          <input
            type="text"
            placeholder="Search by Title..."
            name="search"
            value={search}
            onChange={handleChange}
          />
          <div className="searchcont">
            <SearchRoundedIcon className="searchbtn" />
          </div>
          <div className="sugs">
            <div className="sugs-title">
              {search.length > 0 ? "Suggestions" : "Popular Posts"}
            </div>

            {search.length > 0 ? (
              <div>
                {searchposts.map((post) => (
                  <a href={`/blogs/${post.id}`}>
                    <SrchResult post={post} />
                  </a>
                ))}
              </div>
            ) : (
              <div>
                {posts.map((post) => (
                  <Suggestions post={post} key={post.id} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="homePage" >
        <div className="search-cont" onClick={openSearch}>
          <SearchRoundedIcon className="search-btn" />
        </div>

        <Home id="home" homeimgs={homeimgs} />
        <About id="about" />
        <Newsletter
          id="newsletter"
          style={{ borderBottom: "3px solid #ffa351" }}
        />
        <Blog
          id="blog"
          posts={posts}
          categories={categories[0]?.data?.categories}
          readers={readers}
        />
        {/* <Insta id="insta" /> */}
        <Audio id="Audio" videos={videos} />
        {/* <Readers id="readers" /> */}
        {/* <Contact id="contact" /> */}
        <Footer id="footer" />
      </div>
    </div>
  );
}

export default HomePage;
