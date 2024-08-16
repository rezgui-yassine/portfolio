import React, { useState } from "react";
import "./main.css";

const myprojects = [
  {
    projectTitle: "react project",
    description:"",
    category: ["react", "bootstrap"],
    imaPath: "./images/2.jpg",
  },
  { projectTitle: "angular project",description:"", category: ["angular"], imaPath: "./images/1.jpg" },
  { projectTitle: "Sign Up Form",description:"", category: ["angular"], imaPath: "./images/1.jpg" },
  { projectTitle: "node project", description:"", category: ["node"], imaPath: "./images/3.jpg"},
  { projectTitle: "html css project", description:"", category: ["html", "css"], imaPath:"./images/4.jpg" },
  { projectTitle: "SpringBoot", description:"", category: ["html", "css"], imaPath:"./images/4.jpg" },
];

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
          onClick={() => handleClick("html")}
          className={currentactive === "html" ? "active" : null}
        >
          Html & Css
        </button>
        <button
          onClick={() => handleClick("react")}
          className={currentactive === "react" ? "active" : null}
        >
          React & Mui
        </button>
        <button
          onClick={() => handleClick("angular")}
          className={currentactive === "angular" ? "active" : null}
        >
          Angular & SpringBoot
        </button>
        <button
          onClick={() => handleClick("node")}
          className={currentactive === "node" ? "active" : null}
        >
          Node Js & Express
        </button>
      </section>
      <section className="right-section flex">
        {projects.map((item) => (
          <article key={item.imaPath} className="card">
            <img width={266}  src={item.imaPath} alt="LandingPage" />
            <div style={{ width: "266px" }} className="box">
              <h1 className="title">{item.projectTitle}</h1>
              <p className="sub-title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
                mollitia ullam reiciendis hic.
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