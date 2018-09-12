import React from "react";
import { Route } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Checkin from './components/Checkin';
import Profile from './components/Profile';
import Login from './components/Login';
import Questions from './components/Questions';

const styles = theme => ({
  appBarSpacer: theme.mixins.toolbar
});

const App = (props) => {

  const { classes } = props;

  return (
    <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
      <Navbar />
      <div className={classes.appBarSpacer} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Home} />
      <PrivateRoute exact path="/schedule" component={Schedule} />
      <PrivateRoute exact path="/checkin" component={Checkin} />
      <PrivateRoute exact path="/profile" component={Profile} />
      <PrivateRoute exact path="/faqs" component={Questions} />

    </div>
  )
}

export default withStyles(styles)(App);
