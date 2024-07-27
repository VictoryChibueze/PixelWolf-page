import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <h3 className="logo">Wolf Pixel</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/talk">Let's talk</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
