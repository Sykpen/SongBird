import React, { Component } from "react";
import "./Button.css";

class NextButton extends Component {
  processNextLevel() {
    const {
      updateCurrentStep,
      updateRightAnswerId,
      refreshClickCounter,
    } = this.props;
    updateCurrentStep();
    updateRightAnswerId();
    refreshClickCounter();
  }

  restartGame() {
    const {
      updateCurrentStep,
      updateRightAnswerId,
      refreshClickCounter,
      startNewGame,
    } = this.props;
    updateCurrentStep();
    updateRightAnswerId();
    refreshClickCounter();
    startNewGame();
  }
  render() {
    const { gameEnd } = this.props;
    return (
      <button
        className="button"
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
