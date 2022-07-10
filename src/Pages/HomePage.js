import React, { useState, useEffect } from "react";

import Sidenav from "../Components/Sidenav";
import Home from "../Components/Home";
import About from "../Components/About";
import Newsletter from "../Components/Newsletter";
import Blog from "../Components/Blog";
import Podcasts from "../Components/Podcasts";
import Poetry from "../Components/Poetry";
import Footer from "../Components/Footer";

import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import Suggestions from "../Components/Suggestions";

function HomePage({ data }) {
  const [showsrch, setShowsrch] = useState(false);
  const [search, setSearch] = useState("");
  const [searchposts, setSearchposts] = useState([]);
  const [scroll, setScroll] = useState(true);

  let scroll_style = { height: "100vh", overflow: "hidden" };

  const duration = window.innerWidth < 550 ? 500 : 700;

  const closeSearch = () => {
    setShowsrch(!showsrch);
    setSearch("");
    setTimeout(() => {
      setScroll(true);
    }, 200);
  };
  const openSearch = () => {
    setShowsrch(!showsrch);
    setScroll(false);
  };

  const clear = () => {
    setSearch("");
  };

  const handleChange = (e) => {
    let input = e.target.value;
    setSearch(input);
    const results = data.posts.filter(
      (post) => post.data.title.toLowerCase().indexOf(input.toLowerCase()) > -1
    );
    setSearchposts(results);
    console.log(searchposts);
  };

  const SrchResult = ({ post }) => {
    return (
      <div className="srch-res">
        <div className="srch-title-cont">
          <div className="srch-title">{post.data.title}</div>
          <div className="srch-publish">Published on : {post.data.date}</div>
        </div>
        <div className="srch-cat-cont">
          Categories :
          {post?.data?.categories?.map((cat, idx) => (
            <div className="srch-cat" key={idx}>
              {cat.name}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      {data && (
        <>
          <Sidenav />

          <Fade duration={duration}>
            <div
              id="myOverlay"
              className="overlay"
              style={{
                opacity: !showsrch && "0",
                display: !showsrch && "none",
              }}
            >
              <div
                className="closebtn"
                onClick={closeSearch}
                title="Close Overlay"
              >
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
                  {search ? (
                    <CancelRoundedIcon className="searchbtn" onClick={clear} />
                  ) : (
                    <SearchRoundedIcon className="searchbtn" />
                  )}
                </div>
                <div className="sugs">
                  <div className="sugs-title">
                    {search.length > 0 ? "Suggestions" : "Popular Posts"}
                  </div>

                  {search.length > 0 ? (
                    <div>
                      {searchposts.map((post, idx) => (
                        <Link
                          key={idx}
                          to={{
                            pathname: `/blogs/${post.id}`,
                          }}
                        >
                          <SrchResult post={post} />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div>
                      {data?.pposts?.map((post) => (
                        <Suggestions post={post} key={post.id} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Fade>
          {/* style={!scroll ? scroll_style :{}} */}
          <div className="homePage">
            <div className="search-cont" onClick={openSearch}>
              <SearchRoundedIcon className="search-btn" />
            </div>

            <Home id="home" homeimgs={data?.homeimgs} duration={duration} />
            <About id="about" duration={duration} />
            <Newsletter id="newsletter" duration={duration} />
            <Blog
              id="blog"
              posts={data?.posts}
              categories={data?.categories[0]?.data?.categories}
              readers={data?.readers}
              duration={duration}
            />
            <Podcasts id="podcasts" videos={data?.videos} duration={duration} />
            <Poetry id="insta" poetry={data?.poetry} duration={duration} />
            <Footer id="footer" pposts={data?.pposts} duration={duration} />
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;
