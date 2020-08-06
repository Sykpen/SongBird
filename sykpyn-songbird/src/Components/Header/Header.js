import React from "react";
import "./header.css";
import HeaderItem from "./HeaderItem/HeaderItem";

const Header = ({ counter }) => {
  return (
    <div className="header_main">
      <HeaderItem species="Разминка" active={counter === 0 ? true : false} />
      <HeaderItem species="Воробьиные" active={counter === 1 ? true : false} />
      <HeaderItem
        species="Лесные птицы"
        active={counter === 2 ? true : false}
      />
      <HeaderItem
        species="Певчие птицы"
        active={counter === 3 ? true : false}
      />
      <HeaderItem
        species="Хищные птицы"
        active={counter === 4 ? true : false}
      />
      <HeaderItem
        species="Морские птицы"
        active={counter === 5 ? true : false}
      />
    </div>
  );
};

export default Header;
