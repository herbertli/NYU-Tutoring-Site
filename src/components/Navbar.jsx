import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { withRouter, Link } from 'react-router-dom';
import Home from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CalendarToday from '@material-ui/icons/CalendarToday';
import CheckCircle from '@material-ui/icons/CheckCircle';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import { fakeAuth } from '../services/authentication';


const Navbar = () => {

  const AuthBar = withRouter(({ history }) =>
    fakeAuth.isAuthenticated ? (
      <React.Fragment>
        <Link to="/">
          <IconButton style={{color: 'white'}}>
            <Home />
          </IconButton>
        </Link>
        {/* <Link to="/profile"> */}
          <IconButton style={{color: 'white'}}>
            <AccountCircle />
          </IconButton>
        {/* </Link> */}
        {/* <Link to="/schedule"> */}
          <IconButton style={{color: 'white'}}>
            <CalendarToday />
          </IconButton>
        {/* </Link> */}
        {/* <Link to="/checkin"> */}
          <IconButton style={{color: 'white'}}>
            <CheckCircle />
          </IconButton>
        {/* </Link> */}
        <Link to="/faqs">
          <IconButton style={{color: 'white'}}>
            <QuestionAnswer />
          </IconButton>
        </Link>
        <Button 
          onClick={() => { fakeAuth.signout(() => history.push("/")); }}
          style={{ color: 'white' }}
        >
          Sign out
        </Button>
      </React.Fragment>
    ) : <Button onClick={() => { history.push("/login"); }} style={{ color: 'white' }}>
      Sign in
    </Button> 
  );

  return <div style={{ flexGrow: 1 }}>
    <AppBar>
      <Toolbar>
        <Typography variant="title" style={{ color: 'white', flexGrow: 1 }}>
          Intro to Programming Tutoring
        </Typography>
        <AuthBar />
      </Toolbar>
    </AppBar>
  </div>
}

export default Navbar;