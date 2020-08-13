import React, { Component } from "react";

class OptionsBlockItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rightAnswerId: null,
      winSound:
        "http://freesoundeffect.net/sites/default/files/ta-da-strings-fanfare-1-sound-effect-63027955.mp3",
      loseSound:
        "http://freesoundeffect.net/sites/default/files/bonus-collect-1-sound-effect-82748414.mp3",
    };
    this.returnNeededColor = this.returnNeededColor.bind(this);
  }

  returnNeededColor() {
    if (this.state.color === "green") {
      return "circle green";
    }
    if (this.state.color === "red") {
      return "circle red";
    } else {
      return "circle";
    }
  }

  playAudio(url) {
    new Audio(url).play();
  }

  processAnswer() {
    let color = this.isRightAnswer() ? "green" : "red";
    this.setState((state) => ({
      ...state,
      color: color,
    }));
    if (this.isRightAnswer()) {
      const {
        numberOfAnswers,
        clickCounter,
        updateScore,
        showGameZone,
        showInfoZone,
      } = this.props;
      let amountOfUpdate = numberOfAnswers - clickCounter;
      updateScore(Math.max(amountOfUpdate, 0));
      this.playAudio(this.state.winSound);
      showGameZone();
      showInfoZone();
      return;
    }
    this.props.showInfoZone();
    this.playAudio(this.state.loseSound);
  }

  isRightAnswer() {
    return this.props.birdId === this.state.rightAnswerId;
  }

  render() {
    const { birdName, updatePosition, position, birdId } = this.props;
    if (this.state.rightAnswerId === null) {
      this.setState((state) => ({
        ...state,
        rightAnswerId: this.props.rightAnswerId,
      }));
    }
    return (
      <div
        className="options_block_main_item"
        onClick={() => {
          this.processAnswer();
          this.returnNeededColor();
          updatePosition(position);
        }}
      >
        <div id={birdId} className={this.returnNeededColor()}></div>
        <div className="options_block_main_item_bird">{birdName}</div>
      </div>
    );
  }
}

export default OptionsBlockItem;
