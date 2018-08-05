import React from 'react';
import { Redirect } from "react-router-dom";
import auth from '../services/authentication';

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    auth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>Please Sign-In to Continue!</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default Login;