import React from 'react';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';
import { AuthConsumer } from './AuthContext';

const Home = () => (
  <AuthConsumer>
    {(isAuth) =>
      <div>
        <h2>Home</h2>
        Ready to play? {isAuth ? <AuthButton /> : <Link to='/game'>Let's Go!</Link>}
      </div>
    }
  </AuthConsumer>
);

export default Home;