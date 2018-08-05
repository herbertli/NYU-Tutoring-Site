import React from "react";
import { withRouter } from 'react-router-dom';
import auth from './../services/authentication';

const AuthButton = withRouter(
  ({ history }) =>
    auth.getUser() ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            auth.signout(() => history.push("/"));
          }}
        >
          Sign out
          </button>
      </p>
    ) : <p>You are not logged in.
                <button
          onClick={() => {
            auth.authenticate(() => history.push("/"));
          }}
        >
          Sign in
          </button>
    </p>
);

export default AuthButton;
