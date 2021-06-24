import "./App.scss";
import HomePage from "./Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Components/Loading";
import Login from "./Components/Login";

import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/Blogpage";
import Adminpage from "./Pages/Adminpage";
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

            <Route path="/admin" exact>
              <Adminpage />
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
