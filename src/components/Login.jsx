import React from "react";
import { Redirect } from "react-router-dom";
import { fakeAuth } from "../services/authentication";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
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
          <Button size="large" variant="outlined" color="primary" onClick={this.login}>Log in</Button>
        </Grid>
      </Grid>
      </div>
    );
  }
}

export default Login;