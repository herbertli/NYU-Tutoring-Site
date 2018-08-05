import React from 'react';
import { Redirect } from "react-router-dom";
import { AuthConsumer } from './AuthContext';

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    return (<AuthConsumer>
      {({ isAuth, login }) => isAuth ? (
      <Redirect to={from} />
    ) : <p>
        You are not logged in. <button onClick={login}>Sign in</button>
      </p>
    }
    </AuthConsumer>);
  }
}

export default Login;