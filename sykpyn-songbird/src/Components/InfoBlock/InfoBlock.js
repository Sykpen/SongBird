import React, { Component } from "react";
import "./InfoBlock.css";

class InfoBlock extends Component {
  render() {
    const { data, position } = this.props;
    return (
      <div className="infoBlock_main">
        <div className="infoBlock_flex">
          <div>
            <img className="infoBlock_img" src={data[position].image}></img>
          </div>
          <div className="infoBlock_main_item_second">
            <p className="infoBlock_bird_specias">{data[position].name}</p>
            <p className="infoBlock_bird_name">{data[position].species}</p>
            <audio
              controls
              className="infoBlock_audio"
              src={data[position].audio}
            ></audio>
          </div>
        </div>
        <p>{data[position].description}</p>
      </div>
    );
  }
}

export default InfoBlock;
