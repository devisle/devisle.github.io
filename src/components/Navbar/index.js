import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./logo.png";
import styles from "./Navbar.module.scss";

const Navbar = () => (
  <div className={styles.navigation}>
    <div className={styles.navigationLeft}>
      <Link className={styles.logoLink} to="/">
        <img src={logo} alt="dev isle logo" />
      </Link>
    </div>
    <div className={styles.navigationRight}>
      <nav>
        <ul>
          <li>
            <NavLink to="/cli" activeStyle={{ color: "#65e0ff" }}>
              Advance React CLI
            </NavLink>
          </li>
          <li>
            <NavLink to="/reference" activeStyle={{ color: "#65e0ff" }}>
              Reference JS
            </NavLink>
          </li>
          <li>
            <NavLink to="/simplethunk" activeStyle={{ color: "#65e0ff" }}>
              Simple-Thunk
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Navbar;
