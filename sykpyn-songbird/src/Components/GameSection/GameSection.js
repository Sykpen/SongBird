import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./GameSection.css";

class GameSection extends Component {
  render() {
    const { image, name, audio } = this.props;
    return (
      <div className="game_section">
        <div>
          <img className="game_section_img" src={image} alt="Птица"></img>
        </div>
        <div className="game_section_item_second">
          <p className="game_section_text">{name}</p>
          <div>
            <AudioPlayer src={audio} autoPlayAfterSrcChange={false} />
          </div>
        </div>
      </div>
    );
  }
}

export default GameSection;
