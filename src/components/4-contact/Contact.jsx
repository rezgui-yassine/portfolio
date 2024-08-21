import React from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("myzgneaz");
  if (state.succeeded) {
    return <h1>Thanks for joining!</h1>;
}

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
      <div className="flex">
        <form className="" onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address :</label>
            <input required type="email" id="email" name="" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message :</label>
            <textarea required name="" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit"  disabled={state.submitting} >Submit</button>
        </form>
        <div className="animation border">Animation</div>
      </div>
    </section>
  );
}

export default Contact;
