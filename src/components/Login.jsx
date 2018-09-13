import React from "react";
import { Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import firebase from 'firebase/app';
import 'firebase/auth';
import { usersCollection, updateUser } from './../services/firebase';

class Login extends React.Component {

  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      const user = result.user;
      usersCollection.doc(user.uid).get().then((doc) => {
        if (doc.exists) {
          updateUser(user.uid, user.displayName, user.email);
        }
      });
    }).catch((error) => {
      console.log(error.message);
    });
  };

  render() {
    const { authorized } = this.props;

    if (authorized) {
      return <Redirect to={"/"} />;
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