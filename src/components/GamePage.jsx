import React from 'react';
import DrawingArea from './DrawingArea';

const Game = () => (
  <div>
    <h2>Game</h2>

    <button>
      Create a Game!
    </button>    

    <hr/>

    Join a Game! <input></input>

    <DrawingArea />

  </div>
);

export default Game;