import React, { Component } from "react";
import OptionsBlockItem from "./OptionsblockItem/OptionsBlockItem";
import "./OptionsBlock.css";

class OptionsBlock extends Component {
  handleClick(event) {
    let chosenElement = event.target.closest("div");
    chosenElement.firstChild.classList.add("red");
  }
  render() {
    return (
      <div className="options_block_main" onClick={this.handleClick}>
        <OptionsBlockItem BirdName="Птица 1" />
        <OptionsBlockItem BirdName="Птица 2" />
        <OptionsBlockItem BirdName="Птица 3" />
        <OptionsBlockItem BirdName="Птица 4" />
        <OptionsBlockItem BirdName="Птица 5" />
        <OptionsBlockItem BirdName="Птица 6" />
      </div>
    );
  }
}

export default OptionsBlock;
