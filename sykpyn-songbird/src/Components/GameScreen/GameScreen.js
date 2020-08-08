import React, { Component, Fragment } from "react";
import Header from "../Header/Header";
import UpperHeader from "../UpperHeader/UpperHeader";
import GameSection from "../GameSection/GameSection";
import OptionsBlock from "../OptionsBlock/OptionsBlock";
import InfoBlock from "../InfoBlock/InfoBlock";
import "../Main/main.css";
import NextButton from "../Button/Button";

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { score: 0, rightAnswerId: null, clickCounter: 0 };
    this.generateWinningNumber = this.generateWinningNumber.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.updateRightAnswerId = this.updateRightAnswerId.bind(this);
    this.updateClickCounter = this.updateClickCounter.bind(this);
    this.refreshClickCounter = this.refreshClickCounter.bind(this);
  }

  generateWinningNumber() {
    let item = this.props.data[
      Math.floor(Math.random() * this.props.data.length)
    ];
    return item.id;
  }

  componentDidMount() {
    if (!this.state.rightAnswerId) {
      this.updateRightAnswerId();
    }
  }

  updateRightAnswerId() {
    this.setState((state) => ({
      ...state,
      rightAnswerId: this.generateWinningNumber(),
    }));
  }

  updateScore(newScore) {
    this.setState((state) => ({
      ...state,
      score: this.state.score + newScore,
    }));
  }

  updateClickCounter() {
    this.setState((state) => ({
      ...state,
      clickCounter: this.state.clickCounter + 1,
    }));
  }

  refreshClickCounter() {
    this.setState((state) => ({
      ...state,
      clickCounter: 0,
    }));
  }
  render() {
    const {
      data,
      questionNumber,
      currentPosition,
      updateCurrentStep,
      updatePosition,
    } = this.props;
    const { score, clickCounter } = this.state;
    const birdData = data[currentPosition];
    return (
      <Fragment>
        <div className="main_container">
          <div className="main_wrapper">
            <UpperHeader score={score} />
            <Header questionNumber={questionNumber} />
            <GameSection
              image={birdData.image}
              name={birdData.name}
              audio={birdData.audio}
            />
            <div className="main_flex">
              <OptionsBlock
                birdNames={data}
                updatePosition={updatePosition}
                rightAnswerId={this.generateWinningNumber()}
                updateScore={this.updateScore}
                updateClickCounter={this.updateClickCounter}
                clickCounter={clickCounter}
              />
              <InfoBlock
                image={birdData.image}
                name={birdData.name}
                audio={birdData.audio}
                species={birdData.species}
                description={birdData.description}
              />
            </div>
            <NextButton
              updateCurrentStep={updateCurrentStep}
              updateRightAnswerId={this.updateRightAnswerId}
              refreshClickCounter={this.refreshClickCounter}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default GameScreen;
