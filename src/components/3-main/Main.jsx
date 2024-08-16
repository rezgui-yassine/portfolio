import React, { useState } from "react";
import "./main.css";

function Main() {

  const  [currentactive, setcurrentactive] = useState("all");

  return (
    <main className="flex">
      <section className="left-section flex ">
        <button
          onClick={() => {
            setcurrentactive("all");
          }}
          className={currentactive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            setcurrentactive("html");
          }}
          className={currentactive ==="html" ? "active" : null}
        >
          Html & Css
        </button>
        <button
          
          onClick={() => {
            setcurrentactive("react");
          }}
        className={currentactive==="react" ? "active" : null}>React & Mui</button>
        <button 
        onClick={() => {
          setcurrentactive("angular");
        }}
        className={currentactive==="angular" ? "active" : null}>
          Angular & SpringBoot
        </button >
        <button onClick={()=>{
          setcurrentactive("node");
        }} className={currentactive==="node" ? "active" : null}>Node Js & Express</button>
      </section>
      <section className="right-section  flex ">
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
