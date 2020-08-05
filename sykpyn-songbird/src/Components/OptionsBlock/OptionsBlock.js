import React, { Component } from "react";
import OptionsBlockItem from "./OptionsblockItem/OptionsBlockItem";
import "./OptionsBlock.css";

class OptionsBlock extends Component {
  render() {
    const { data, update } = this.props;
    const rows = [];
    for (let i = 0; i <= 5; i++) {
      rows.push(
        <OptionsBlockItem
          birdName={data[i].name}
          update={update}
          position={i}
        />
      );
    }
    return <div className="options_block_main">{rows}</div>;
  }
}

export default OptionsBlock;
