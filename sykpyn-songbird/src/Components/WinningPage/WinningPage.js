import React, { Component } from "react";
import "./WinningPage.css";

class WinningPage extends Component {
  render() {
    const { score } = this.props;
    return (
      <div className="winningPage_main">
        <p className="winningPage_big_text">
          {score === 30 ? "Вау! А ты хорош!!!" : "Поздравляем!"}
        </p>
        <img
          src="https://i.ibb.co/s2MYdCq/12332112331.jpg"
          alt="Clean victory"
          className={score === 30 ? "clean_win_show" : "clean_win_hide"}
        ></img>
        <p className="winningPage_small_text">Вы набрали {score} из 30 очков</p>
      </div>
    );
  }
}

export default WinningPage;
