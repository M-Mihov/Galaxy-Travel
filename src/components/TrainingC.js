import React from "react";
import "./TrainingC.css";
import astronaut from "../assets/moon.jpg";
import pod from "../assets/pod.jpg";

function TrainingC() {
  return (
    <div className="glx-content">
      <div className="training-container">
        <div className="training-info">
          <h3>Training</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet.
          </p>
          <button type="button" className="btn">
            contact
          </button>
        </div>
        <div className="training-images">
          <div className="astro-img">
            <img src={astronaut} />
          </div>
          <div className="pod-img">
            <img src={pod} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingC;
