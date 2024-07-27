import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <section>
        <h3 className="logo">Wolf Pixel</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/assets">Assets</Link>
          </li>
          <li>
            <Link to="/livetrade">Live Trade</Link>
          </li>
          <li>
            <Link to="/forum">Forum</Link>
          </li>
          <li>
            <Link to="/reports">Reports</Link>
          </li>
          <li>
            <Link to="/setting">Setting</Link>
          </li>
        </ul>
      </section>
      <button className="nav-btn">Guide</button>
    </nav>
  );
}

export default NavBar;
