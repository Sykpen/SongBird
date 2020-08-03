import React, { Component } from "react";
import { Fragment } from "react";
import Header from "../Header/Header";
import Upper_header from "../Upper-header/Upper-header";
import "./main.css";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <div className="main_container">
          <div className="main_wrapper">
            <Upper_header />
            <Header />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Main;
