import "./Header.css";
import Image from "next/image";

export default function Header() {
    return (
    <>
      <nav>
        <div className="imageContainer">
          <img src="logo.webp" alt="logo" />
        </div>
        <div className="navMenuContainer">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Sevices</li>
          <li>Portfolio</li>
          <li>Work Process</li>
        </ul>
        </div>
        <div className="navButtonContainer">
        <button>Subscribe Now !!</button>
        </div>
      </nav>
    </>
    );
}
  