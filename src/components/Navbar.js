import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaTimes, FaBars } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "nav-bar scrolled" : "nav-bar"}>
      <div className="logo">
        <Link to="/">
          <h1>GLX TRVL</h1>
        </Link>
      </div>
      <div className={click ? "nav-links active" : "nav-links"}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/training">Training</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
    </div>
  );
}

export default Navbar;
