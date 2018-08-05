import React from 'react';
import DrawingArea from './DrawingArea';
import { gamesCollection } from './../services/firebase';

class PlayingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameObj: null
    }
    this.fetchGameAndListen(this.props.gameId)
  }

  fetchGameAndListen = (gameId) => {
    gamesCollection.doc(gameId).onSnapshot(function(doc) {
      console.log("Current data: ", doc.data());
      this.setState({
        gameObj: doc
      });
    });
  }

  render() {
    if (this.props.isHost) {
      switch (this.state.gameObj.gameStage) {
        case 0: 
          <Lobby gameObj={this.state.gameObj} />; break;
      }
    } else {
      <DrawingArea />
    }
  }
}

export default PlayingScreen;
