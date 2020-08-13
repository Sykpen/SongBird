import React, { Component } from "react";
import "./Button.css";

class NextButton extends Component {
  buttonBehaviar() {
    const {
      updateCurrentStep,
      updateRightAnswerId,
      refreshClickCounter,
      startNewGame,
      gameEnd,
    } = this.props;
    if (gameEnd) {
      updateCurrentStep();
      updateRightAnswerId();
      refreshClickCounter();
      startNewGame();
      return;
    } else {
      updateCurrentStep();
      updateRightAnswerId();
      refreshClickCounter();
    }
  }
  render() {
    const { gameEnd } = this.props;
    return (
      <button
        className="button"
        onClick={() => {
          this.buttonBehaviar();
        }}
      >
        {gameEnd ? "Play Again" : "Next Level"}
      </button>
    );
  }
}

export default NextButton;
