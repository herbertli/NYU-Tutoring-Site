import React from "react";
import { Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import firebase from 'firebase/app';
import 'firebase/auth';
import { usersCollection, updateUser } from './../services/firebase';

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    // firebase.auth().signInWithRedirect(provider);
    // firebase.auth().getRedirectResult().then(function(result) {
    firebase.auth().signInWithPopup(provider).then((result) => {
      console.log(result.user);
      const user = result.user;
      usersCollection.doc(user.uid).get().then((doc) => {
        if (doc.exists) {
          console.log("Authorized!");
          updateUser(user.uid, user.displayName, user.email);
          this.setState({ redirectToReferrer: true });
        } else {
          console.log("Unauthorized!");
        }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
    }).catch((error) => {
      console.log(error.message);
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (<div style={{ padding: 40 }}>
      <Grid container direction="column" justify="center" alignItems="center" spacing={32}>
        <Grid item xs={10}>
          <Typography variant="headline">
            Sorry, you must be an authorized user to view this page!
          </Typography>
          <Typography variant="headline">
            To request access, please contact your tutoring coordinator.
          </Typography>
        </Grid>
        <Grid item>
          <Button size="large" variant="outlined" color="primary" onClick={() => { this.login() }}>Log in</Button>
        </Grid>
      </Grid>
      </div>
    );
  }
}

export default Login;