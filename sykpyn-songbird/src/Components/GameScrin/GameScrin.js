import React, { Component } from "react";
import { Fragment } from "react";
import Header from "../Header/Header";
import UpperHeader from "../UpperHeader/UpperHeader";
import GameSection from "../GameSection/GameSection";
import OptionsBlock from "../OptionsBlock/OptionsBlock";
import InfoBlock from "../InfoBlock/InfoBlock";
import "../Main/main.css";
import NextButton from "../Button/Button";

class GameScrin extends Component {
  render() {
    const {
      data,
      questionNumber,
      currentPosition,
      updateCurrentStep,
      updatePosition,
    } = this.props;
    const birdData = data[currentPosition];
    return (
      <Fragment>
        <div className="main_container">
          <div className="main_wrapper">
            <UpperHeader />
            <Header counter={questionNumber} />
            <GameSection
              image={birdData.image}
              name={birdData.name}
              audio={birdData.audio}
            />
            <div className="main_flex">
              <OptionsBlock birdNames={data} updatePosition={updatePosition} />
              <InfoBlock
                image={birdData.image}
                name={birdData.name}
                audio={birdData.audio}
                species={birdData.species}
                description={birdData.description}
              />
            </div>
            <NextButton updateCurrentStep={updateCurrentStep} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default GameScrin;
