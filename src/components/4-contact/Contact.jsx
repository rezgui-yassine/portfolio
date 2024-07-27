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
        <form className="border">
          
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="" />
          </div>
          <div className="flex" style={{marginTop:"24px"}}>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"></textarea>
          </div>
          <button>Submit</button>
        </form>
        <div className="animation border"></div>
      </div>
    </section>
  );
}

export default Contact;
