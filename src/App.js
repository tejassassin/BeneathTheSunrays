import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/Blogpage";
import Adminpage from "./Pages/Adminpage";
import CategoryPage from "./Pages/categoryPage";
import BlogSection from "./Pages/BlogSection";
import React, { useState, useEffect } from "react";

import { useStateValue } from "./StateProvider";
import { db } from "./firebase";


function App() {
  const [{ user }] = useStateValue();

  const [data, setData] = useState(null);

  const [posts, setPosts] = useState(null);
  const [popularPosts, setPopular_posts] = useState(null);
  const [pposts, setPposts] = useState(null);
  const [poetry, setPoetry] = useState(null);
  const [videos, setVideos] = useState(null);
  const [categories, setCategories] = useState(null);
  const [readers, setReaders] = useState(null);
  const [homeimgs, setHomeimgs] = useState(null);
  const [slides, setSlides] = useState(null);



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


  useEffect(() => {
    const unsubscribe = db.collection("slides").onSnapshot((snapshot) =>
      setSlides(
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

  useEffect(() => {
    if (
      posts &&
      pposts &&
      poetry &&
      videos &&
      homeimgs &&
      readers &&
      categories &&
      slides
    ) {
        setData({posts, pposts, poetry, videos, homeimgs, readers, categories, slides})
    }
  }, [posts, pposts, poetry, videos, homeimgs, readers, categories, slides]);


  return (
    <div className="App">
      <div className="main-content">
        <Switch>
          <Route path="/" exact>
            <HomePage data={data}/>
          </Route>

          <Route path="/about" exact>
            <AboutPage data={data}/>
          </Route>

          <Route path="/blogs/:id" exact>
            <BlogPage data={data}/>
          </Route>

          <Route path="/categories/:id" exact>
            <CategoryPage data={data}/>
          </Route>

          <Route path="/admin" exact>
            {!user ? <Login /> : <Adminpage data={data}/>}
          </Route>

          <Route path="/blogsection/:id" exact>
            <BlogSection data={data}/>
          </Route>

          <Route path="/blogsection" exact>
            <BlogSection data={data}/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
