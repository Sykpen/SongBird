import React, { Component } from "react";
import "./GameSection.css";

class GameSection extends Component {
  render() {
    const { data, counter, position } = this.props;
    return (
      <div className="game_section">
        <div>
          <img
            className="game_section_img"
            src={data[counter][position].image}
          ></img>
        </div>
        <div className="game_section_item_second">
          <p className="game_section_text">{data[counter][position].name}</p>
          <div>
            <audio src={data[counter][position].audio} controls></audio>
          </div>
        </div>
      </div>
    );
  }
}

export default GameSection;
