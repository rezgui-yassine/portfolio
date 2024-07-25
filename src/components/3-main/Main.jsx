import React from "react";
import "./main.css";

function Main() {
  return (
    <main className="flex">
      <section className="left-section flex border">
        <button className="active">All Projects</button>
        <button>Html & Css</button>
        <button>React & Mui</button>
        <button>Angular & SpringBoot</button>
        <button>Node Js & Express</button>
      </section>
      <section className="right-section border flex ">
        {[...Array(5)].map((item) => (
          <article key={item} className="card ">
            <img width={266} src="LandingPage.png" alt="LandingPage" />
            <div style={{ width: "266px" }} className="box ">
              <h1 className="title">E-Learning Platforme</h1>
              <p className="sub-title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
                mollitia ullam reiciendis hic, illum labore expedita molestias
                nisi aliquid, provident, recusandae quod cum voluptas. Dolore
                aliquam dolores error autem sequi!
              </p>
              <div className="flex icons">
                <div style={{ gap: "11px" }} className="flex">
                  <div className="icon-link"></div>
                  <div className="icon-github"></div>
                </div>
                <a className="link" href="">
                  more
                  <span
                    style={{ alignSelf: "end" }}
                    className="icon-arrow-right"
                  ></span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Main;
