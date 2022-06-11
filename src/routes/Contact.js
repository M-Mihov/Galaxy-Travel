import React from "react";
import ContactC from "../components/ContactC";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import contactHeaderBg from "../assets/contactbg.jpg";

function Contact() {
  return (
    <div>
      <Navbar />
      <Header
        heading="Contact."
        text="Contact GLX Travel"
        headerImage={contactHeaderBg}
      />
      <ContactC />
      <Footer />
    </div>
  );
}

export default Contact;
