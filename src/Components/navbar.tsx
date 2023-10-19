import React from "react";
import Logo from "../images/logo/logo.png";

const Navbar = () => {
  return (
    <div className="container-fluid " id="Home">
      <a className="" href="#">
        <img src={Logo} alt="Logo-img " className=" logo" />
      </a>
      <div className="container-fluid__child1">
        <a href="#Home" className="">
          <b>Home</b>
        </a>
        <a href="#About" className="">
          <b>About</b>
        </a>
        <a href="#Model" className="">
          <b>Models</b>
        </a>
        <a href="#Testimonial" className="">
          <b>Testimonials</b>
        </a>
        <a href="#Contact" className="">
          <b>Contact</b>
        </a>
      </div>
      <div className="container-fluid__child2">
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
