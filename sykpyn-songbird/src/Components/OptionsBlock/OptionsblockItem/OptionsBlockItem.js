import React, { Component } from "react";

class OptionsBlockItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rightAnswerId: null,
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

  processAnswer() {
    let color = this.isRightAnswer() ? "green" : "red";
    this.setState((state) => ({
      ...state,
      color: color,
    }));
    if (this.isRightAnswer()) {
      let amountOfUpdate = this.props.numberOfAnswers - this.props.clickCounter;
      this.props.updateScore(Math.max(amountOfUpdate, 0));
    }
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
