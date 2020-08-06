import React from "react";
import "./header.css";
import HeaderItem from "./HeaderItem/HeaderItem";

const Header = ({ questionNumber }) => {
  return (
    <div className="header_main">
      <HeaderItem
        species="Разминка"
        active={questionNumber === 0 ? true : false}
      />
      <HeaderItem
        species="Воробьиные"
        active={questionNumber === 1 ? true : false}
      />
      <HeaderItem
        species="Лесные птицы"
        active={questionNumber === 2 ? true : false}
      />
      <HeaderItem
        species="Певчие птицы"
        active={questionNumber === 3 ? true : false}
      />
      <HeaderItem
        species="Хищные птицы"
        active={questionNumber === 4 ? true : false}
      />
      <HeaderItem
        species="Морские птицы"
        active={questionNumber === 5 ? true : false}
      />
    </div>
  );
};

export default Header;
