import React from "react";
import "./header.css";
import HeaderItem from "./HeaderItem/HeaderItem";

const Header = () => {
  return (
    <div className="header_main">
      <div className="header_main_item first">
        <HeaderItem species="Разминка" />
      </div>
      <div className="header_main_item">
        <HeaderItem species="Воробьиные" />
      </div>
      <div className="header_main_item">
        <HeaderItem species="Лесные птицы" />
      </div>
      <div className="header_main_item">
        <HeaderItem species="Певчие птицы" />
      </div>
      <div className="header_main_item">
        <HeaderItem species="Хищные птицы" />
      </div>
      <div className="header_main_item last">
        <HeaderItem species="Морские птицы" />
      </div>
    </div>
  );
};

export default Header;
