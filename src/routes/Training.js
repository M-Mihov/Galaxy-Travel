import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrainingC from "../components/TrainingC";
import Header from "../components/Header";
import trainingHeaderBg from "../assets/moonNasa.jpg";

function Training() {
  return (
    <div>
      <Navbar />
      <Header
        heading="Training."
        text="Pre-Flight & In-Flight Training."
        headerImage={trainingHeaderBg}
      />
      <TrainingC />
      <Footer />
    </div>
  );
}

export default Training;
