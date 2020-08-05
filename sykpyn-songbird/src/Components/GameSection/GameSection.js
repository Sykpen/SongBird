import React, { Component } from "react";
import "./GameSection.css";

class GameSection extends Component {
  render() {
    const { image, name, audio } = this.props;
    return (
      <div className="game_section">
        <div>
          <img className="game_section_img" src={image}></img>
        </div>
        <div className="game_section_item_second">
          <p className="game_section_text">{name}</p>
          <div>
            <audio src={audio} controls></audio>
          </div>
        </div>
      </div>
    );
  }
}

export default GameSection;
