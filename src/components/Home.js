import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Grid>
    <Row>
    <Col>
    <Jumbotron>
      <h1>Home Page</h1>
      <p>
        Testing 1, 2, 3...
      </p>
      <p>
      <Link to="/login">
        <Button bsStyle="primary">Login</Button>
      </Link>
      <Link to="/create">
        <Button bsStyle="primary">Create a game...</Button>
      </Link>  
      <Link to="/game">
        <Button bsStyle="primary">Join a game...</Button>
      </Link>
      </p>
    </Jumbotron>
    </Col>
    </Row>
    </Grid>
  );
}

export default Home;