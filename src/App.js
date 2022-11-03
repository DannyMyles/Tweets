import './App.css';
import React from 'react';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (

    <Router>
      <div className="App">
      <Navbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
