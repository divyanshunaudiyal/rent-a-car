import React from "react";
import Polo from "../images/Car/polo.png";

const Section1 = () => {
  return (
    <>
      <div className="row section1-row">
        <div className="col text-center ">
          <div className="h5">Plan your trip now</div>
          <h1>
            Save <span>big</span> with our car rental
          </h1>
          <p>
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="d-flex gap-2 text-center justify-content-center align-items-center">
            <button className="button-orangered">
              <b>Book Ride</b>
            </button>
            <button className="button-black">
              <b>Learn More</b>
            </button>
          </div>
        </div>
        <div className="col col-sm-auto">
          <img src={Polo} alt="car img" className="img-fluid" />
        </div>
      </div>
    </>
  );
};

export default Section1;
