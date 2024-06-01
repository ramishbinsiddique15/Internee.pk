import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from ".././assets/img/logo.webp";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="img">
          <NavLink to="/">
            <img height={40} src={logo} alt="Logo" />
          </NavLink>
        </div>
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <NavLink to="/">Internship</NavLink>
            </li>
            <li>
              <NavLink to="/">Company Collaborations</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact Us</NavLink>
            </li>
          </ul>
          <div className="buttons">
            <button className="portal">Job Portal</button>
            <button className="login">Internee's Login</button>
          </div>
          <div className="close" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999" />
            </svg>
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5L20 5" />
            <path d="M4 12L20 12" />
            <path d="M4 19L20 19" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Navbar;
