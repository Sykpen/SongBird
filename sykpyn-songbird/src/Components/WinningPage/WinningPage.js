import React, { Component } from "react";
import "./WinningPage.css";

class WinningPage extends Component {
  render() {
    const { score } = this.props;
    return (
      <div className="winningPage_main">
        <p className="winningPage_big_text">Поздравляем!</p>
        <p className="winningPage_small_text">Вы набрали {score} из 30 очков</p>
      </div>
    );
  }
}

export default WinningPage;
