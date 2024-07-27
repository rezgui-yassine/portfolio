import React from "react";
import "./contact.css";

function Contact() {
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact us
      </h1>
      <p className="sub-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officiis
      </p>
      <div className="flex">
        <form className="">
          <div className="flex">
            <label htmlFor="email">Email Address :</label>
            <input required type="email" id="email" name="" />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message :</label>
            <textarea required  name="" id="message"></textarea>
          </div>
          <button className="submit">Submit</button>
        </form>
        <div className="animation border"></div>
      </div>
    </section>
  );
}

export default Contact;
