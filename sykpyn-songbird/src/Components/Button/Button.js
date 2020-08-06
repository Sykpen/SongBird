import React, { Component } from "react";
import "./Button.css";

class NextButton extends Component {
  render() {
    const { updateCurrentStep } = this.props;
    return (
      <button className="button" onClick={updateCurrentStep}>
        Next Level
      </button>
    );
  }
}

export default NextButton;
