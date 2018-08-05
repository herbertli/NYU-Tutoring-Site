import React, { Component } from 'react';
import CanvasDraw from "react-canvas-draw";

class DrawingArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColorInd: 0
    }
  }

  // TODO: use LZ-String compression to save and load
  saveDrawing = () => {
    console.log(this.saveableCanvas.getSaveData())
  }

  loadDrawing = (drawingStr) => {
    console.log(drawingStr);
  }

  render() {
    return (
    <React.Fragment>
      <CanvasDraw
        ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
      />
      <button onClick={this.saveDrawing}>Save</button>
    </React.Fragment>
    )
  }

}

export default DrawingArea;
