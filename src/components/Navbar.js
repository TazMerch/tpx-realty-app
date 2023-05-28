import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="nav-logo">
            <img
              alt="logo"
              src="/images/tpxicon.png"
              className="nav-logo-img"
            ></img>
            <div className="nav-logo-name">The Property Experts Realty</div>
            <div className="nav-logo-bar" />
            <div className="nav-logo-phone">904.410.2000</div>
          </Link>
          <div className="nav-items-container">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Services"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/About"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
