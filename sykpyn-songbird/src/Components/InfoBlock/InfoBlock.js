import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./InfoBlock.css";

class InfoBlock extends Component {
  render() {
    const { image, name, audio, species, description } = this.props;
    return (
      <div className="infoBlock_main">
        <div className="infoBlock_flex">
          <div>
            <img className="infoBlock_img" src={image} alt="Птица"></img>
          </div>
          <div className="infoBlock_main_item_second">
            <p className="infoBlock_bird_specias">{name}</p>
            <p className="infoBlock_bird_name">{species}</p>
            <AudioPlayer
              className="rhap_container_second"
              src={audio}
              autoPlayAfterSrcChange={false}
            />
          </div>
        </div>
        <p>{description}</p>
      </div>
    );
  }
}

export default InfoBlock;
