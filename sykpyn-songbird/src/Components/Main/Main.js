import React, { Component } from "react";
import { Fragment } from "react";
import Header from "../Header/Header";
import UpperHeader from "../UpperHeader/UpperHeader";
import GameSection from "../GameSection/GameSection";
import OptionsBlock from "../OptionsBlock/OptionsBlock";
import InfoBlock from "../InfoBlock/InfoBlock";
import "./main.css";
import Button from "../Button/Button";
import birdsData from "../../data/birds";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: birdsData,
      counter: 0,
      position_in_array: 0,
    };
    this.updateCounter = this.updateCounter.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
  }

  updateCounter() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
    if (this.state.counter === 5) {
      console.log("Выводим экран конца игры");
    }
    console.log(this.state.counter);
  }

  updatePosition(position) {
    this.setState((state) => ({
      position_in_array: position,
    }));
    console.log(this.state.position_in_array);
  }

  render() {
    const { data, counter, position_in_array } = this.state;
    return (
      <Fragment>
        <div className="main_container">
          <div className="main_wrapper">
            <UpperHeader />
            <Header />
            <GameSection
              data={data}
              counter={counter}
              position={position_in_array}
            />
            <div className="main_flex">
              <OptionsBlock
                data={data}
                counter={counter}
                update={this.updatePosition}
              />
              <InfoBlock
                data={data}
                counter={counter}
                position={position_in_array}
              />
            </div>
            <Button counter={counter} update={this.updateCounter} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Main;
