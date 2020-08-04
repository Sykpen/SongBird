import React from "react";

const OptionsBlockItem = (props) => {
  return (
    <div className="options_block_main_item">
      <div className="circle"></div>
      <div className="options_block_main_item_bird">{props.BirdName}</div>
    </div>
  );
};

export default OptionsBlockItem;
