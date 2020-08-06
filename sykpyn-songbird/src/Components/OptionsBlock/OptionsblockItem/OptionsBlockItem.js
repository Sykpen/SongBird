import React, { Component } from "react";

class OptionsBlockItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  changeColor() {
    if (this.props.birdId === this.props.rightAnswer) {
      document.getElementById(`${this.props.birdId}`).classList.add("green");
      console.log("win, дальше можно делать логику подебы с этого места");
    }
    document.getElementById(`${this.props.birdId}`).classList.add("red");
  }
  render() {
    const { birdName, updatePosition, position, birdId } = this.props;
    return (
      <div
        className="options_block_main_item"
        onClick={() => {
          this.handleClick();
          updatePosition(position);
          this.changeColor();
        }}
      >
        {/* <div id={birdId} className={this.state.isToggleOn ? "circle" : "circle red"}></div> */}
        <div id={birdId} className="circle"></div>
        <div className="options_block_main_item_bird">{birdName}</div>
      </div>
    );
  }
}

export default OptionsBlockItem;
