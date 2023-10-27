import React, { useState, useEffect } from "react";
import CAR_DATA from "./CarData.js";
import Golf6 from "../images/Cars-big/golf6.jpg";
import Audi from "../images/Cars-big/audi.jpg";
import Benz from "../images/Cars-big/benz.jpg";
import BMW from "../images/Cars-big/bmw.jpg";
import Passat from "../images/Cars-big/passatcc.jpg";
import Toyota from "../images/Cars-big/toyota.jpg";

const BookCar = () => {
  // for modal display
  const [showModal, setShowModal] = useState(false);

  // for form details
  const [carName, setCar] = useState("");
  const [pickupLoc, setPickup] = useState("");
  const [dropLoc, setDrop] = useState("");
  const [date, setDate] = useState("");

  const [carImg, setCarImg] = useState("");

  // function to show modal when all inputs are filled
  const openModal = (e) => {
    e.preventDefault();

    const errorMsg = document.querySelector(".error-message");

    //show error message
    const showErrorMessage = () => {
      errorMsg.style.display = "flex";
    };

    // remove error message
    const removeErrorMessage = () => {
      errorMsg.style.display = "none";
    };

    if (!carName || !pickupLoc || !dropLoc || !date) {
      showErrorMessage();
    } else {
      removeErrorMessage();
      setShowModal(!showModal);
      const modalDiv = document.querySelector(".booking-modal");

      modalDiv?.scroll(0, 0);
    }

    setCar("");

    setPickup("");
    setDrop("");
    setDate("");
  };

  //function for updating values from form
  function getCar(e) {
    setCar(e.target.value);
    setCarImg(e.target.value);
  }

  function getPickupLocation(e) {
    setPickup(e.target.value);
  }
  function getDropLocation(e) {
    setDrop(e.target.value);
  }
  function getDate(e) {
    setDate(e.target.value);
  }

  //switch image url based on name
  let imgUrl;
  switch (carImg) {
    case "Golf 6":
      imgUrl = Golf6;
      break;
    case "Audi":
      imgUrl = Audi;
      break;
    case "Toyota Supra":
      imgUrl = Toyota;
      break;
    case "BMW":
      imgUrl = BMW;
      break;
    case "Mercedes-Benz":
      imgUrl = Benz;
      break;
    case "Passat":
      imgUrl = Passat;
      break;
    default:
      imgUrl = "";
  }

  return (
    <>
      <section className="book-section" id="booking-section">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${showModal ? "active-modal" : ""}`}
        ></div>
        <div className="container" id="bookCar">
          <div className="book-content">
            <div className="book-content__box">
              <h2 className="heading">Book your car</h2>

              <p className="error-message">All fields required!</p>
              <p className="booking-done">
                Check your email,Booking completed{" "}
              </p>

              {/* form */}
              <form className="box-form">
                <div className="box-form__container">
                  {/* car name */}
                  <div className="">
                    <label>
                      Select Car <span>*</span>
                    </label>
                    <select className="form-control " id="" onChange={getCar}>
                      <option key={0}></option>
                      {CAR_DATA.map((cars, i) => {
                        const [car] = cars;
                        return <option key={i + 1}>{car.name}</option>;
                      })}
                    </select>
                  </div>

                  {/* Pickup location */}
                  <div>
                    <label>
                      Pickup location <span>*</span>
                    </label>
                    <select
                      name=""
                      id=""
                      className="form-control "
                      onChange={getPickupLocation}
                    >
                      <option key={0}></option>
                      {CAR_DATA.map((cars, i) => {
                        const [car] = cars;
                        return (
                          <option key={i + 1} placeholder="choose">
                            {car.city}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  {/* Drop Location */}
                  <div>
                    <label>
                      Drop location <span>*</span>
                    </label>
                    <select
                      name=""
                      id=""
                      className="form-control "
                      onChange={getDropLocation}
                    >
                      <option key={0}></option>
                      {CAR_DATA.map((cars, i) => {
                        const [car] = cars;
                        return (
                          <option key={i + 1} placeholder="choose">
                            {car.city}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="form-control box-form__container-date">
                    <label>
                      Choose date <span>*</span>
                    </label>
                    <input type="date" onChange={getDate} />
                  </div>
                </div>
                {/* Button trigger modal  */}
                <button type="submit" className="btn" onClick={openModal}>
                  Search car
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* modal */}

      <div className={` booking-modal ${showModal ? "active-modal" : " "}`}>
        <div className="booking-modal__title">
          <h1>Confirm reservation</h1>
        </div>

        <div>
          <h3>Please fill the following details to proceed:</h3>

          {/* pickup time */}

          <div className="booking-modal__car-info">
            <div className="booking-modal__car-info-date">
              <div className="">
                <h6>pickup date and time</h6>
                <span>
                  {date} / <input type="time" className="input-time" />
                </span>
                {/* drop-off time */}
                <h6>drop-off date and time</h6>
                <span>
                  {date} / <input type="time" className="input-time" />
                </span>
              </div>
              <div>
                <h6>pickup location</h6>
                <span>
                  <input type="text" placeholder="type pickup location" />
                </span>
                {/* drop-off time */}
                <h6>drop location</h6>
                <span>
                  <input type="text" placeholder="type drop location" />
                </span>
              </div>
            </div>

            <div className="booking-modal__car-info-date"></div>

            <div className="booking-modal__car-info-model">
              <h5>Model</h5>
              <img src={imgUrl} alt="car-image" className="img-fluid w-50" />
            </div>
          </div>

          <div className="booking-modal__personal-info">
            <h5>PERSONAL INFORMATION</h5>
            <div className="booking-modal__personal-info-container">
              <div className="name">
                <label>
                  Name <span>*</span>
                </label>
                <input type="text" placeholder="enter full name" />
              </div>
              <div className="number">
                <label>
                  Number <span>*</span>
                </label>
                <input type="number" placeholder="enter Number" />
              </div>
              <div className="age">
                <label>
                  Age <span>*</span>
                </label>
                <input type="number" placeholder="enter age" />
              </div>
              <div className="address">
                <label>
                  Address <span>*</span>
                </label>
                <input type="text" placeholder="enter address" />
              </div>
              <div className="email">
                <label>
                  Email <span>*</span>
                </label>
                <input type="text" placeholder="enter email" />
              </div>

              <div className="zip-code">
                <label>
                  Zip Code <span>*</span>
                </label>
                <input type="number" placeholder="enter Zip Code" />
              </div>

              <div className="checkbox">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  name="myCheckbox"
                  value="checkboxValue"
                />
                <label htmlFor="myCheckbox">Subscribe to our newsletter</label>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-modal__footer">
          <button type="button" onClick={openModal}>
            Close
          </button>
          <button type="button" onClick={openModal}>
            Save changes
          </button>
        </div>
      </div>

      {/*  */}
    </>
  );
};

export default BookCar;
