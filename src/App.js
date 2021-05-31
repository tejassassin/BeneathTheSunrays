import "./App.scss";
import HomePage from "./Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Components/Loading";
import AboutPage from "./Pages/AboutPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 5000);
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
              <AboutPage/>
            </Route>

          </Switch>
        </div>
      )}
    </div>
  );
}

export default App;
