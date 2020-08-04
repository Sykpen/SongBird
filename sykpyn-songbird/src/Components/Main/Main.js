import React, { Component } from "react";
import { Fragment } from "react";
import Header from "../Header/Header";
import UpperHeader from "../UpperHeader/UpperHeader";
import GameSection from '../GameSection/GameSection';
import OptionsBlock from '../OptionsBlock/OptionsBlock';
import "./main.css";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <div className="main_container">
          <div className="main_wrapper">
            <UpperHeader />
            <Header />
            <GameSection />
            <OptionsBlock />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Main;
