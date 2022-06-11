import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PricingC from "../components/PricingC";
import pricingHeaderImg from "../assets/heroImg.jpg";

function Pricing() {
  return (
    <div>
      <Navbar />
      <Header
        heading="Pricing."
        text="Choose your trip."
        headerImage={pricingHeaderImg}
      />
      <PricingC />
      <Footer />
    </div>
  );
}

export default Pricing;
