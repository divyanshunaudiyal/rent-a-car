import React from "react";

const Contact = () => {
  return (
    <div className="contact-container ">
      <h1 className="">CONTACT US</h1>
      <div className="contact-container__details ">
        <div className="car-rental">
          <h4>CAR Rental</h4>
          {/* <p>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p> */}

          <h5>+91 1234567890</h5>
          <h5>div.naudiyal@gmail.com</h5>
        </div>
        <div className="working-hours">
          <h4>WORKING HOURS</h4>

          <h5>Mon - Fri: 9:00AM - 9:00PM</h5>
          <h5>Sat: 9:00AM - 7:00PM</h5>
          <h5>Sunday closed</h5>
        </div>
        <div className="subscription">
          <h4>SUBSCRIPTION</h4>
          <p>Subscribe your Email address for latest news & updates.</p>
          <input type="email" placeholder="Enter Email Address" />
          <button type="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
