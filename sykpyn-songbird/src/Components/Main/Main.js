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
      gameEnd: false,
      showMockGameZone: true,
      showMockInfoZone: true,
      score: 0,
    };
    this.updateCounter = this.updateCounter.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.updateGameEndInfo = this.updateGameEndInfo.bind(this);
    this.showGameZone = this.showGameZone.bind(this);
    this.showInfoZone = this.showInfoZone.bind(this);
    this.updateScore = this.updateScore.bind(this);
  }

  updateCounter() {
    let newState = this.state;
    if (this.state.questionNumber === 5) {
      newState.questionNumber = 0;
      this.updateGameEndInfo();
      setTimeout(
        function (state) {
          this.setState({ ...state, gameEnd: false, score: 0 });
        }.bind(this),
        5000
      );
    } else {
      newState.questionNumber += 1;
      this.setState((state) => ({
        ...state,
        showMockGameZone: true,
        showMockInfoZone: true,
      }));
    }
    this.setState((state) => ({
      ...state,
      questionNumber: newState.questionNumber,
    }));
  }

  updateScore(newScore) {
    this.setState((state) => ({
      ...state,
      score: this.state.score + newScore,
    }));
  }

  updatePosition(position) {
    this.setState((state) => ({
      ...state,
      currentPosition: position,
    }));
  }

  updateGameEndInfo() {
    this.setState((state) => ({
      ...state,
      gameEnd: true,
    }));
  }

  showGameZone() {
    this.setState((state) => ({
      ...state,
      showMockGameZone: false,
    }));
  }

  showInfoZone() {
    this.setState((state) => ({
      ...state,
      showMockInfoZone: false,
    }));
  }

  render() {
    const {
      questionNumber,
      currentPosition,
      gameEnd,
      showMockGameZone,
      showMockInfoZone,
      score,
    } = this.state;
    return (
      <GameScreen
        data={birdsData[questionNumber]}
        currentPosition={currentPosition}
        questionNumber={questionNumber}
        updateCurrentStep={this.updateCounter}
        updatePosition={this.updatePosition}
        gameEnd={gameEnd}
        updateGameEndInfo={this.updateGameEndInfo}
        showMockGameZone={showMockGameZone}
        showMockInfoZone={showMockInfoZone}
        showGameZone={this.showGameZone}
        showInfoZone={this.showInfoZone}
        score={score}
        updateScore={this.updateScore}
      />
    );
  }
}

export default Main;
