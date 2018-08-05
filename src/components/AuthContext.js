import React from 'react';
import auth from './../services/authentication'

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isAuth: false 
    }
  }
  
  login = () => {
    auth.authenticate((success) => {
      this.setState({ isAuth: success })
    })
  }

  logout = () => {
    auth.signout((success) => {
      this.setState({ isAuth: !success })
    })
  }

  render() {
    return (
      <AuthContext.Provider
        value={{ 
          isAuth: this.state.isAuth,
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