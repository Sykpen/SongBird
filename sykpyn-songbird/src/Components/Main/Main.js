import React, { Component } from "react";
import { Fragment } from "react";
import Header from "../Header/Header";
import UpperHeader from "../UpperHeader/UpperHeader";
import GameSection from "../GameSection/GameSection";
import OptionsBlock from "../OptionsBlock/OptionsBlock";
import InfoBlock from "../InfoBlock/InfoBlock";
import "./main.css";
import NextButton from "../Button/Button";
import birdsData from "../../data/birds";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      data: birdsData,
      currentPosition: 0,
      // questionNumber: 0,
    };
    this.updateCounter = this.updateCounter.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
  }

  updateCounter() {
    this.setState((state) => ({
      counter: state.counter + 1,
      // questionNumber: state.questionNumber + 1,
    }));
    if (this.state.counter === 5) {
      this.setState((state) => ({
        counter: 0,
      }))
      console.log("Выводим экран конца игры");
    }
  }

  updatePosition(position) {
    this.setState((state) => ({
      currentPosition: position,
    }));
  }

  render() {
    const { data, counter, currentPosition } = this.state;
    const birdData = data[counter][currentPosition];
    return (
      <Fragment>
        <div className="main_container">
          <div className="main_wrapper">
            <UpperHeader />
            <Header />
            <GameSection
              image={birdData.image}
              name={birdData.name}
              audio={birdData.audio}
            />
            <div className="main_flex">
              <OptionsBlock
              // birdNames={data}
                birdNames={data[counter]}
                updatePosition={this.updatePosition}
              />
              <InfoBlock
                image={birdData.image}
                name={birdData.name}
                audio={birdData.audio}
                species={birdData.species}
                description={birdData.description}
              />
            </div>
            <NextButton updateCurrentStep={this.updateCounter} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Main;
