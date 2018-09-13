import React from "react";
import { Route } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import CircularProgress from '@material-ui/core/CircularProgress';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Checkin from './components/Checkin';
import Profile from './components/Profile';
import Login from './components/Login';
import Questions from './components/Questions';
import * as firebase from 'firebase/app';
import { usersCollection } from './services/firebase';

const styles = theme => ({
  appBarSpacer: theme.mixins.toolbar,
  progress: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
  }
});

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      authorized: false,
      currentUser: null,
      isLoading: true
    };
  }

  componentWillMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const usersRef = usersCollection.doc(user.uid)
        usersRef.get().then((docSnapshot) => {
          if (docSnapshot.exists) {
            this.setState({
              authorized: true,
              currentUser: user,
              isLoading: false
            });
          } else {
            this.setState({
              authorized: false,
              currentUser: user,
              isLoading: false
            });
          }
        });
      } else {
        this.setState({
          authorized: false,
          currentUser: null
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { classes } = this.props;
    const { authorized, isLoading } = this.state;

    if (isLoading) {
      return <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, padding: 100 }}>
        <Navbar authorized={authorized} />
        <div className={classes.appBarSpacer} />
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item >
            <CircularProgress className={classes.progress} size={100} />
          </Grid>
        </Grid>
      </div>
    }

    return (
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
        <Navbar authorized={authorized} />
        <div className={classes.appBarSpacer} />
        <Route exact path="/login" render={() => <Login authorized={authorized} />} />
        <PrivateRoute exact path="/" component={Home} authorized={authorized} />
        <PrivateRoute exact path="/schedule" component={Schedule} authorized={authorized} />
        <PrivateRoute exact path="/checkin" component={Checkin} authorized={authorized} />
        <PrivateRoute exact path="/profile" component={Profile} authorized={authorized} />
        <PrivateRoute exact path="/faqs" component={Questions} authorized={authorized} />
      </div>
    )
  }
}

export default withStyles(styles)(App);
