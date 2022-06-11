import React from "react";
import "./ContactC.css";

function ContactC() {
  return (
    <div className="glx-content">
      <form>
        <label>Your name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Details</label>
        <textarea></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}

export default ContactC;
