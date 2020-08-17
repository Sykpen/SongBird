import React, { Component } from "react";
import "./WinningPage.css";
import { CLEAR_WIN_SCORE, WINNING_IMAGE_SRC } from "../../data/constants";

class WinningPage extends Component {
  winWithMaxScore() {
    return this.props.score === CLEAR_WIN_SCORE;
  }

  render() {
    const { score } = this.props;
    return (
      <div className="winningPage_main">
        <p className="winningPage_big_text">
          {this.winWithMaxScore() ? "Вау! А ты хорош!!!" : "Поздравляем!"}
        </p>
        <img
          src={WINNING_IMAGE_SRC}
          alt="Clean victory"
          className={
            this.winWithMaxScore() ? "clean_win_show" : "clean_win_hide"
          }
        ></img>
        <p className="winningPage_small_text">Вы набрали {score} из 30 очков</p>
      </div>
    );
  }
}

export default WinningPage;
