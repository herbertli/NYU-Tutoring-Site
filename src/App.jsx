import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

import Home from './components/HomePage';
import Login from './components/LoginPage';
import About from './components/AboutPage';
import Profile from './components/ProfilePage';
import Game from './components/GamePage';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/game">Let's Play</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route path="/about" component={About} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/game" component={Game} />
    </div>
  </Router>
);

export default App;
