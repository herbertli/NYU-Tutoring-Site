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
import Tooltip from '@material-ui/core/Tooltip';

const Navbar = () => {

  const AuthBar = withRouter(({ history }) =>
    fakeAuth.isAuthenticated ? (
      <React.Fragment>
        <Link to="/">
          <Tooltip title="Home">
            <IconButton aria-label="Home" style={{ color: 'white' }}>
              <Home />
            </IconButton>
          </Tooltip>
        </Link>
        {/* <Link to="/profile"> */}
        <Tooltip title="My Profile">
          <IconButton aria-label="My Profile" style={{ color: 'white' }}>
            <AccountCircle />
          </IconButton>
        </Tooltip>
        {/* </Link> */}
        {/* <Link to="/schedule"> */}
        <Tooltip title="My Schedule">
          <IconButton aria-label="My Schedule" style={{ color: 'white' }}>
            <CalendarToday />
          </IconButton>
        </Tooltip>
        {/* </Link> */}
        {/* <Link to="/checkin"> */}
        <Tooltip title="Check In">
          <IconButton aria-label="Check In" style={{ color: 'white' }}>
            <CheckCircle />
          </IconButton>
        </Tooltip>
        {/* </Link> */}
        <Link to="/faqs">
          <Tooltip title="FAQs">
            <IconButton aria-label="FAQs" style={{ color: 'white' }}>
              <QuestionAnswer />
            </IconButton>
          </Tooltip>
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