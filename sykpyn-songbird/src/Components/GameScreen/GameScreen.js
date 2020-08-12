import React, { Component, Fragment } from "react";
import Header from "../Header/Header";
import UpperHeader from "../UpperHeader/UpperHeader";
import GameSection from "../GameSection/GameSection";
import OptionsBlock from "../OptionsBlock/OptionsBlock";
import InfoBlock from "../InfoBlock/InfoBlock";
import "../Main/main.css";
import NextButton from "../Button/Button";
import WinningPage from "../WinningPage/WinningPage";
import InfoMock from "../InfoMock/InfoMock";

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rightAnswerId: null,
      clickCounter: 0,
      showMockGameZone: true,
      mockImage: "https://i.ibb.co/3fhPwDD/bird.jpg",
      mockText: "*****",
      showMockInfoZone: true,
      infoBlockMockText: "Послушайте плеер. Выберите птицу из списка",
    };
    this.generateWinningNumber = this.generateWinningNumber.bind(this);
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
      showMockGameZone,
      showGameZone,
      showInfoZone,
      showMockInfoZone,
      score,
      updateScore,
      gameEnd,
    } = this.props;
    const { clickCounter, mockImage, mockText } = this.state;
    const birdData = data[currentPosition];
    return (
      <Fragment>
        <div className="main_container">
          <div className="main_wrapper">
            <UpperHeader score={score} />
            <Header questionNumber={questionNumber} />
            {gameEnd ? (
              <WinningPage score={score} />
            ) : (
              <Fragment>
                <GameSection
                  image={showMockGameZone ? mockImage : birdData.image}
                  name={showMockGameZone ? mockText : birdData.name}
                  audio={birdData.audio}
                />
                <div className="main_flex">
                  <OptionsBlock
                    birdNames={data}
                    updatePosition={updatePosition}
                    rightAnswerId={this.generateWinningNumber()}
                    updateScore={updateScore}
                    updateClickCounter={this.updateClickCounter}
                    clickCounter={clickCounter}
                    showGameZone={showGameZone}
                    showInfoZone={showInfoZone}
                  />
                  {showMockInfoZone ? (
                    <InfoMock />
                  ) : (
                    <InfoBlock
                      image={birdData.image}
                      name={birdData.name}
                      audio={birdData.audio}
                      species={birdData.species}
                      description={birdData.description}
                    />
                  )}
                </div>
              </Fragment>
            )}
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
