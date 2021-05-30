import './App.scss';
import HomePage from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      
      <div className="main-content">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
            </Switch>
          </div>
      </div>
  );
}

export default App;
