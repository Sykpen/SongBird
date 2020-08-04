import React, { Component } from "react";

class OptionsBlockItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }
  render() {
    const { BirdName } = this.props;
    return (
      <div className="options_block_main_item">
        <div className={this.state.isToggleOn ? "circle" : "circle red"}></div>
        <div className="options_block_main_item_bird">{BirdName}</div>
      </div>
    );
  }
}

export default OptionsBlockItem;
