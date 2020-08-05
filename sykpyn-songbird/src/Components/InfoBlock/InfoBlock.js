import React, { Component } from "react";
import "./InfoBlock.css";

class InfoBlock extends Component {
  render() {
    return (
      <div className="infoBlock_main">
        <div className="infoBlock_flex">
          <div className="infoBlock_img"></div>
          <div className="infoBlock_main_item_second">
            <p className="infoBlock_bird_specias">Птица</p>
            <p className="infoBlock_bird_name">Название птицы</p>
            <audio controls className="infoBlock_audio"></audio>
          </div>
        </div>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    );
  }
}

export default InfoBlock;
