import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    const { update } = this.props;
    return (
      <button className="button" onClick={update}>
        Next Level
      </button>
    );
  }
}

export default Button;
