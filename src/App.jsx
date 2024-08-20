import React, { useEffect } from "react";

import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";

function App() {
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 300) {
          setShowScroll(true);
        } else {
          setShowScroll(false);
        }
      },
      { passive: true }
    );
  }, []);
  const [showScroll, setShowScroll] = React.useState(false);

  return (
    <div className="container" id="up">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a href="#up" style={{ opacity: showScroll ? 1 : 0, transition: "2s" }}>
        <button className="icon-keyboard_arrow_up  scrole2top"></button>
      </a>
    </div>
  );
}

export default App;
