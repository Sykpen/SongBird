import React, { Component } from "react";
import OptionsBlockItem from "./OptionsblockItem/OptionsBlockItem";
import "./OptionsBlock.css";

class OptionsBlock extends Component {
  render() {
    const { birdNames, updatePosition } = this.props;
    const rows = [];
    for (let i = 0; i <= 5; i++) {
      rows.push(
        <OptionsBlockItem
          birdName={birdNames[i].name}
          updatePosition={updatePosition}
          position={i}
        />
      );
    }
    return <div className="options_block_main">{rows}</div>;
  }
}

export default OptionsBlock;
