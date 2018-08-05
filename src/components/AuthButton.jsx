import React from "react";
import { AuthConsumer } from './AuthContext'

const AuthButton = () => (
  <AuthConsumer>
    {({ isAuth, login, logout }) => isAuth ? (
      <p>
        Welcome!{" "}
        <button onClick={logout}>Sign out</button>
      </p>
    ) : <p>
        You are not logged in. <button onClick={login}>Sign in</button>
      </p>
    }
</AuthConsumer>);

export default AuthButton;
