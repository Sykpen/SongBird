import React, { Component } from "react";
import { Fragment } from "react";
import Header from "../Header/Header";
import UpperHeader from "../UpperHeader/UpperHeader";
import GameSection from '../GameSection/GameSection'
import "./main.css";
import Button from "../Button/Button";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <div className="main_container">
          <div className="main_wrapper">
            <UpperHeader />
            <Header />
            <GameSection />
            <Button />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Main;
