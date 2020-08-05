import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    const { update_counter } = this.props;
    return (
      <button className="button" onClick={update_counter}>
        Next Level
      </button>
    );
  }
}

export default Button;
