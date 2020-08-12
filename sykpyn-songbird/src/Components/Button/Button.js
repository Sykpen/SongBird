import React, { Component } from "react";
import "./Button.css";

class NextButton extends Component {
  render() {
    const {
      updateCurrentStep,
      updateRightAnswerId,
      refreshClickCounter,
    } = this.props;
    return (
      <button
        className="button"
        onClick={() => {
          updateCurrentStep();
          updateRightAnswerId();
          refreshClickCounter();
        }}
      >
        Next Level
      </button>
    );
  }
}

export default NextButton;
