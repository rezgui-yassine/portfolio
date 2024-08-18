import React, { useState } from "react";
import "./main.css";
import { myprojects } from "./myProjects";



function Main() {
  const [currentactive, setcurrentactive] = useState("all");
  const [projects, setprojects] = useState(myprojects);

  const handleClick = (category) => {
    setcurrentactive(category);
    if (category === "all") {
      setprojects(myprojects);
    } else {
      const newarry = myprojects.filter((item) => item.category.includes(category));
      setprojects(newarry);
    }
  };

  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => handleClick("all")}
          className={currentactive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => handleClick("spring boot")}
          className={currentactive === "spring boot" ? "active" : null}
        >
          Spring Boot
        </button>
        <button
          onClick={() => handleClick("angular")}
          className={currentactive === "angular" ? "active" : null}
        >
          Angular
        </button>
        <button
          onClick={() => handleClick("react")}
          className={currentactive === "react" ? "active" : null}
        >
          React
        </button>
     
        <button
          onClick={() => handleClick("node.js")}
          className={currentactive === "node.js" ? "active" : null}
        >
          Node.js & Express
        </button>
        <button
          onClick={() => handleClick("mui")}
          className={currentactive === "mui" ? "active" : null}
        >
          MUI
        </button>
        {/* <button
          onClick={() => handleClick("full-stack react & express")}
          className={currentactive === "full-stack react & express" ? "active" : null}
        >
          Full-Stack React & Express
        </button> */}
        <button
          onClick={() => handleClick("Full-Stack Angular & Spring Boot Project")}
          className={currentactive === "full-stack angular & spring boot Project" ? "active" : null}
        >
          Full-Stack Angular & Spring Boot
        </button>
      </section>
      <section className="right-section flex">
        {projects.map((item) => (
          <article key={item.imaPath} className="card">
            <img width={266} height={170} src={item.imaPath} alt="LandingPage" />
            <div style={{ width: "266px" }} className="box">
              <h1 className="title">{item.projectTitle}</h1>
              <p className="sub-title">
               {item.description}
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