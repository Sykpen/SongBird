import React, { Component } from "react";
import OptionsBlockItem from "./OptionsblockItem/OptionsBlockItem";
import "./OptionsBlock.css";

class OptionsBlock extends Component {
  render() {
    const { data, counter, update } = this.props;
    return (
      <div className="options_block_main">
        <OptionsBlockItem
          birdName={data[counter][0].name}
          update={update}
          position={0}
        />
        <OptionsBlockItem
          birdName={data[counter][1].name}
          update={update}
          position={1}
        />
        <OptionsBlockItem
          birdName={data[counter][2].name}
          update={update}
          position={2}
        />
        <OptionsBlockItem
          birdName={data[counter][3].name}
          update={update}
          position={3}
        />
        <OptionsBlockItem
          birdName={data[counter][4].name}
          update={update}
          position={4}
        />
        <OptionsBlockItem
          birdName={data[counter][5].name}
          update={update}
          position={5}
        />
      </div>
    );
  }
}

export default OptionsBlock;
