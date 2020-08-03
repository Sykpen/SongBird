import React, { Component } from "react";
import "./UpperHeader.css";

class UpperHeader extends Component {
  render() {
    return (
      <div className="upper_header">
        <div className="logo"></div>
        <div>Score</div>
      </div>
    );
  }
}

export default UpperHeader;
