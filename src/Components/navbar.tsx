import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo/logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
        {/* <li>
          <Link to="/bookCar">BookCar</Link>
        </li> */}
        <li>
          <Link to="/models">Models</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
