import React, { Component } from 'react';
import CanvasDraw from "react-canvas-draw";

class DrawingArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColorInd: 0
    }
  }

  render() {
    return <CanvasDraw />
  }

}

export default DrawingArea;
