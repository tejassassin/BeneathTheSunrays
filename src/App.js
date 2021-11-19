import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./Components/Login";
import Loading from "./Components/Loading";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/Blogpage";
import Adminpage from "./Pages/Adminpage";
import CategoryPage from "./Pages/categoryPage";
import BlogSection from "./Pages/BlogSection";

import { useStateValue } from "./StateProvider";

function App() {
  const [loading, setLoading] = useState(true);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <div className="main-content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>

            <Route path="/about" exact>
              <AboutPage />
            </Route>

            <Route path="/blogs/:id" exact>
              <BlogPage />
            </Route>

            <Route path="/categories/:id" exact>
              <CategoryPage />
            </Route>

            <Route path="/admin" exact>
              <Adminpage />
            </Route>

            <Route path="/blogsection" exact>
              <BlogSection />
            </Route>
          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;

{
  /* {!user ? <Login /> : <Adminpage />} */
}
