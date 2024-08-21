import React from "react";
import "./hero.css";
import Lottie from "lottie-react";
import devoloperAnimation from "../../../public/animation/Animation - 1724273399998.json";

function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section ">
        <div className="parent-avatar flex">
          <img src="./me.png" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>
        <h1 className="title">
          Computer Science Student | Full Stack Developer (Angular - SpringBoot)
        </h1>
        <p className="sub-title">
          I’m Yassine Rezgui, a software engineer specialist based in Tunisia. I
          hold a degree in software engineering and information systems. With a
          passion for developing innovative solutions, I specialize in
          full-stack development, particularly with Angular, Spring Boot, and
          the MERN stack. For my final year project, I created a comprehensive
          application using the MERN stack. I’m dedicated to creating impactful
          technologies that enhance user experiences and drive business success.
        </p>
        <div className="all-icons flex">
          <div className="icon  icon-twitter" />
          <div className="icon icon-instagram" />
          <div className="icon icon-github" />
          <div className="icon icon-linkedin" />
        </div>
      </div>
      <div className="right-section animation ">

      <Lottie
                // loop={true}
                style={{ height:350 ,width:350 }}
                animationData={devoloperAnimation}
              />
      </div>
    </section>
  );
}

export default Hero;
