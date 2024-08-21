import React from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/Animation - 1724259754217.json";
import emailAnimation from "../../../public/animation/Animation - 1724269984888.json";
function Contact() {
  const [state, handleSubmit] = useForm("myzgneaz");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when i publish
        something new.
      </p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form className="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address :</label>
            <input
              autoComplete="off"
              required
              type="email"
              id="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message :</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Submit"}
          </button>
          {state.succeeded && (
            <p style={{ color: "green", marginTop: "10px", fontSize: "18px" }}>
              <Lottie
                loop={false}
                style={{ height: 41 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully 👌
            </p>
          )}
        </form>
        <div className="animation ">
         
          <Lottie className="contact-animation"  style={{ height: 366 }} animationData={emailAnimation} />
        </div>
      </div>
    </section>
  );
}

export default Contact;
