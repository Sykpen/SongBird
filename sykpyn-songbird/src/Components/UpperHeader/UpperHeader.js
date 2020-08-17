import React, { Component } from "react";
import "./UpperHeader.css";

class UpperHeader extends Component {
  render() {
    const { score } = this.props;
    return (
      <div className="upper_header">
        <div className="logo"></div>
        <div className="score">Score : {score}</div>
      </div>
    );
  }
}

export default UpperHeader;
