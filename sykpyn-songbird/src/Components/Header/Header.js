import React from "react";
import "./header.css";
import Header_item from "./Header-item/Header-item";

const Header = () => {
  return (
    <div className="header_main">
      <div className="header_main_item first">
        <Header_item species="Разминка" />
      </div>
      <div className="header_main_item">
        <Header_item species="Воробьиные" />
      </div>
      <div className="header_main_item">
        <Header_item species="Лесные птицы" />
      </div>
      <div className="header_main_item">
        <Header_item species="Певчие птицы" />
      </div>
      <div className="header_main_item">
        <Header_item species="Хищные птицы" />
      </div>
      <div className="header_main_item last">
        <Header_item species="Морские птицы" />
      </div>
    </div>
  );
};

export default Header;
