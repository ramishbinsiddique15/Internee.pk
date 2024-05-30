import React from "react";
import { NavLink } from "react-router-dom";
import logo from ".././assets/img/logo.webp";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="img">
          <NavLink to="/">
            <img height={40} src={logo} />
          </NavLink>
        </div>
        <div className="menu">
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
