import React, { Component } from "react";
import "./InfoBlock.css";

class InfoBlock extends Component {
  render() {
    const { data, counter, position } = this.props;
    return (
      <div className="infoBlock_main">
        <div className="infoBlock_flex">
          <div>
            <img
              className="infoBlock_img"
              src={data[counter][position].image}
            ></img>
          </div>
          <div className="infoBlock_main_item_second">
            <p className="infoBlock_bird_specias">
              {data[counter][position].name}
            </p>
            <p className="infoBlock_bird_name">
              {data[counter][position].species}
            </p>
            <audio
              controls
              className="infoBlock_audio"
              src={data[counter][position].audio}
            ></audio>
          </div>
        </div>
        <p>{data[counter][position].description}</p>
      </div>
    );
  }
}

export default InfoBlock;
