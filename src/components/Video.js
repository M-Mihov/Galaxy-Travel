import React from "react";
import homeVideo from "../assets/space.mp4";
import "./Video.css";
import { Link } from "react-router-dom";

function Video() {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={homeVideo} type="video/mp4" />
      </video>

      <div className="home-text">
        <h1>Galaxy. Travel.</h1>
        <p>World's first civilian space travel</p>
        <div className="home-text-btn">
          <Link to="/training">
            <button className="btn">Training</button>
          </Link>
          <Link to="/contact">
            <button className="btn">Launch</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Video;
