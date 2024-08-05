import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import { GiWolfHowl } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { BsBagDash } from "react-icons/bs";
import { LuArrowUpDown } from "react-icons/lu";
import { SiRocket } from "react-icons/si";
import { HiUserGroup } from "react-icons/hi2";
import { FcBullish } from "react-icons/fc";
import { CgDanger } from "react-icons/cg";

function NavBar() {
  return (
    <nav className="nav-bar">
      <section className="section">
        <h3 className="logo">
          <GiWolfHowl />
          <span>Wolf Pixel</span>
        </h3>
        <ul>
          <li>
            <Link to="/">
              <HiHome />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/assets">
              <BsBagDash />
              <span>Assets</span>
            </Link>
          </li>
          <li>
            <Link to="/livetrade">
              <LuArrowUpDown /> <span>Live Trade</span>
            </Link>
          </li>
          <li>
            <Link to="/forum">
              <HiUserGroup />
              <span>Forum</span>
            </Link>
          </li>
          <li>
            <Link to="/reports">
              <FcBullish />
              <span>Reports</span>
            </Link>
          </li>
          <li>
            <Link to="/launchpad">
              <SiRocket />
              <span>Launchpad</span>
            </Link>
          </li>
        </ul>
      </section>
      <button className="nav-btn">
        <CgDanger /> <span>Guide</span>
      </button>
    </nav>
  );
}

export default NavBar;
