import React from 'react';
import { createGame } from './../services/firebase';
import { AuthConsumer } from './AuthContext';

class Game extends React.Component {

  startNewGame(userId) {
    createGame(userId)
  }

  render() {
    return (<AuthConsumer>
      {({user}) =>
      <div>
        <h2>Game</h2>
        <button onClick={() => this.startNewGame(user.uid)}>
          Create a Game!
        </button>
        <hr />
        Join a Game! <input></input>
      </div>
      }
    </AuthConsumer>)
  }

}

export default Game;