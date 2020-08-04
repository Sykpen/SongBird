import React, { Component } from "react";
import OptionsBlockItem from "./OptionsblockItem/OptionsBlockItem";
import "./OptionsBlock.css";

class OptionsBlock extends Component {
  render() {
    return (
      <div className="options_block_main">
        <OptionsBlockItem birdName="Птица 1" />
        <OptionsBlockItem birdName="Птица 2" />
        <OptionsBlockItem birdName="Птица 3" />
        <OptionsBlockItem birdName="Птица 4" />
        <OptionsBlockItem birdName="Птица 5" />
        <OptionsBlockItem birdName="Птица 6" />
      </div>
    );
  }
}

export default OptionsBlock;
