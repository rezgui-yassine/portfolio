import { useState } from "react";
import "./header.css";

function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className=" flex">
      {/* for make the nav in the center */}
      <div></div>

      <button 
        onClick={() => {
          setShowModal(true);
        }}
        className="menu icon-menu"
      >
      
      </button>

      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button >
        <span className="icon-moon-o"></span>
      </button>
      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-clear"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
