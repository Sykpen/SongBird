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
      rightAnswerDone: false,
      useSound: true,
    };
    this.updateCounter = this.updateCounter.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.updateGameEndInfo = this.updateGameEndInfo.bind(this);
    this.showGameZone = this.showGameZone.bind(this);
    this.showInfoZone = this.showInfoZone.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.startNewGame = this.startNewGame.bind(this);
    this.rightAnswerIndicate = this.rightAnswerIndicate.bind(this);
    this.changeSoundUse = this.changeSoundUse.bind(this);
    this.enableSound = this.enableSound.bind(this);
  }

  updateCounter() {
    let newState = this.state;
    if (this.state.questionNumber === 5) {
      newState.questionNumber = 0;
      this.updateGameEndInfo();
    } else {
      newState.questionNumber += 1;
      this.setState((state) => ({
        ...state,
        showMockGameZone: true,
        showMockInfoZone: true,
        rightAnswerDone: false,
      }));
    }
    this.setState((state) => ({
      ...state,
      questionNumber: newState.questionNumber,
    }));
  }

  changeSoundUse() {
    this.setState((state) => ({
      ...state,
      useSound: true,
    }));
  }

  enableSound() {
    this.setState((state) => ({
      ...state,
      useSound: false,
    }));
  }

  rightAnswerIndicate() {
    this.setState((state) => ({
      ...state,
      rightAnswerDone: true,
    }));
  }

  updateScore(newScore) {
    this.setState((state) => ({
      ...state,
      score: this.state.score + newScore,
    }));
  }

  startNewGame() {
    this.setState((state) => ({
      ...state,
      gameEnd: false,
      score: 0,
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
      rightAnswerDone,
      useSound,
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
        startNewGame={this.startNewGame}
        rightAnswerIndicate={this.rightAnswerIndicate}
        rightAnswerDone={rightAnswerDone}
        changeSoundUse={this.changeSoundUse}
        useSound={useSound}
        enableSound={this.enableSound}
      />
    );
  }
}

export default Main;
