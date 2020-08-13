import React, { Component } from "react";
import "./Button.css";

class NextButton extends Component {
  processNextLevel() {
    const {
      updateCurrentStep,
      updateRightAnswerId,
      refreshClickCounter,
      changeSoundUse,
    } = this.props;
    updateCurrentStep();
    updateRightAnswerId();
    refreshClickCounter();
    changeSoundUse();
  }

  restartGame() {
    const {
      updateCurrentStep,
      updateRightAnswerId,
      refreshClickCounter,
      startNewGame,
      changeSoundUse,
    } = this.props;
    updateCurrentStep();
    updateRightAnswerId();
    refreshClickCounter();
    startNewGame();
    changeSoundUse();
  }
  render() {
    const { gameEnd, rightAnswerDone } = this.props;
    return (
      <button
        className={rightAnswerDone ? "button" : "button_unclickable"}
        onClick={() => {
          gameEnd ? this.restartGame() : this.processNextLevel();
        }}
      >
        {gameEnd ? "Play Again" : "Next Level"}
      </button>
    );
  }
}

export default NextButton;
