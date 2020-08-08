import React, { Component } from "react";
import "./main.css";
import birdsData from "../../data/birds";
import GameScreen from "../GameScreen/GameScreen";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: birdsData,
      currentPosition: 0,
      questionNumber: 0,
    };
    this.updateCounter = this.updateCounter.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
  }

  updateCounter() {
    let newState = this.state;
    if (this.state.questionNumber === 5) {
      newState.questionNumber = 0;
    } else {
      newState.questionNumber += 1;
    }
    this.setState((state) => ({
      ...state,
      questionNumber: newState.questionNumber,
    }));
  }

  updatePosition(position) {
    this.setState((state) => ({
      ...state,
      currentPosition: position,
    }));
  }

  render() {
    const { questionNumber, currentPosition } = this.state;
    return (
      <GameScreen
        data={birdsData[questionNumber]}
        currentPosition={currentPosition}
        questionNumber={questionNumber}
        updateCurrentStep={this.updateCounter}
        updatePosition={this.updatePosition}
      />
    );
  }
}

export default Main;
