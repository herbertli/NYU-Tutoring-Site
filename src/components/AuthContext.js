import React from 'react';
import auth from './../services/authentication';
import { createOrGetUser } from './../services/firebase';

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isAuth: false,
      user: null
    }
  }
  
  login = () => {
    auth.authenticate((success, user) => {
      this.setState({ 
        isAuth: success,
        user
      })
      createOrGetUser(user)
    })
  }

  logout = () => {
    auth.signout((success, user) => {
      this.setState({ 
        isAuth: !success,
        user
      })
    })
  }

  render() {
    return (
      <AuthContext.Provider
        value={{ 
          isAuth: this.state.isAuth,
          user: this.state.user,
          login: this.login,
          logout: this.logout
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
const AuthConsumer = AuthContext.Consumer
export { AuthProvider, AuthConsumer }