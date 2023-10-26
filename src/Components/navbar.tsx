import React from "react";
import Logo from "../images/logo/logo.png";

const Navbar = () => {
  return (
    <div className="navbar-container navbar-container" id="Home">
      <a className="" href="#">
        <img src={Logo} alt="Logo-img " className=" logo" />
      </a>
      <div className="navbar-container__child1">
        <a href="#" className="">
          <b>Home</b>
        </a>
        <a href="#bookCar" className="">
          <b>Book</b>
        </a>
        <a href="#model" className="">
          <b>Models</b>
        </a>
        <a href="#" className="">
          <b>Testimonials</b>
        </a>
        <a href="#" className="">
          <b>Contact</b>
        </a>
      </div>
      <div className="navbar-container__child2">
        <a href="" className="btn-green">
          <b> Sign up</b>
        </a>
        <button className="btn-orangered">
          <b>Register</b>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
