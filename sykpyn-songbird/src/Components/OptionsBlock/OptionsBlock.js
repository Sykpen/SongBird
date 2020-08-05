import React, { Component } from "react";
import OptionsBlockItem from "./OptionsblockItem/OptionsBlockItem";
import "./OptionsBlock.css";

class OptionsBlock extends Component {
  render() {
    const { names, updatePosition } = this.props;
    const rows = [];
    for (let i = 0; i <= 5; i++) {
      rows.push(
        <OptionsBlockItem
          birdName={names[i].name}
          updatePosition={updatePosition}
          position={i}
        />
      );
    }
    return <div className="options_block_main">{rows}</div>;
  }
}

export default OptionsBlock;
