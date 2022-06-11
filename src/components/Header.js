import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div
      style={{ backgroundImage: `url(${props.headerImage})` }}
      className="header"
    >
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default Header;
