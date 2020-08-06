import React, { Component } from "react";
import "./main.css";
import birdsData from "../../data/birds";
import GameScrin from "../GameScrin/GameScrin";

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
    this.setState((state) => ({
      questionNumber: state.questionNumber + 1,
    }));
    console.log(this.state.questionNumber);
    if (this.state.questionNumber === 5) {
      this.setState((state) => ({
        questionNumber: 0,
      }));
      console.log("Выводим экран конца игры");
    }
  }

  updatePosition(position) {
    this.setState((state) => ({
      currentPosition: position,
    }));
  }

  render() {
    return (
      <GameScrin
        data={birdsData[this.state.questionNumber]}
        currentPosition={this.state.currentPosition}
        questionNumber={this.state.questionNumber}
        updateCurrentStep={this.updateCounter}
        updatePosition={this.updatePosition}
      />
    );
  }
}

export default Main;
