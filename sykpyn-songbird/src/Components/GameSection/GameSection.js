import React, { Component } from "react";
import "./GameSection.css";

class GameSection extends Component {
  render() {
    return (
      <div className="game_section">
        <div className="game_section_img"></div>
        <div>
          <p className="game_section_text">То что выберет игрок</p>
          <div>
            <audio src="../../sound/SCOTLAND.mp3" controls></audio>
          </div>
        </div>
      </div>
    );
  }
}

export default GameSection;
