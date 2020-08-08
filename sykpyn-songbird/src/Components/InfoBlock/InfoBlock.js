import React, { Component } from "react";
import "./InfoBlock.css";

class InfoBlock extends Component {
  render() {
    const { image, name, audio, species, description } = this.props;
    return (
      <div className="infoBlock_main">
        <div className="infoBlock_flex">
          <div>
            <img className="infoBlock_img" src={image} alt='Птица'></img>
          </div>
          <div className="infoBlock_main_item_second">
            <p className="infoBlock_bird_specias">{name}</p>
            <p className="infoBlock_bird_name">{species}</p>
            <audio
              controls
              className="infoBlock_audio"
              src={audio}
            ></audio>
          </div>
        </div>
        <p>{description}</p>
      </div>
    );
  }
}

export default InfoBlock;
