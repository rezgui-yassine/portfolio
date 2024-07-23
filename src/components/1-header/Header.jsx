
import "./header.css";

function Header() {
  return <header className=" flex">
    {/* for make the nav in the center */}
    <div></div>


    <button className="menu">show model</button>

    <nav>
    <ul className="flex">
      <li><a href="">About</a></li>
      <li><a href="">Articles</a></li>
      <li><a href="">Projects</a></li>
      <li><a href="">Speaking</a></li>
      <li><a href="">Contact</a></li>
    </ul>
    </nav>
    <button>light</button>
<div className="fixed">
    <ul className="modal ">
      <li><a href="">About</a></li>
      <li><a href="">Articles</a></li>
      <li><a href="">Projects</a></li>
      <li><a href="">Speaking</a></li>
      <li><a href="">uses</a></li>
    </ul>

</div>

    </header>;
}

export default Header;
