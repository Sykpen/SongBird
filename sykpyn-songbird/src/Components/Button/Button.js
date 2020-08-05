import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    const { updateCounter } = this.props;
    return (
      <button className="button" onClick={updateCounter}>
        Next Level
      </button>
    );
  }
}

export default Button;
