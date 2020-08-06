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
    this.setState((state) => ({
      questionNumber: state.questionNumber + 1,
    }));
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
    const { questionNumber, currentPosition } = this.state;
    let item =
      birdsData[questionNumber][
        Math.floor(Math.random() * birdsData[questionNumber].length)
      ];
    return (
      <GameScreen
        data={birdsData[questionNumber]}
        currentPosition={currentPosition}
        questionNumber={questionNumber}
        updateCurrentStep={this.updateCounter}
        updatePosition={this.updatePosition}
        rightAnswer={item.id}
      />
    );
  }
}

export default Main;
