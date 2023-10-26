import React, { useEffect, useState } from "react";
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
    console.log(pickupLoc);
    const errorMsg = document.querySelector(".error-message");

    const showErrorMessage = () => {
      errorMsg.style.display = "flex";
    };
    const removeErrorMessage = () => {
      errorMsg.style.display = "none";
    };
    if (!carName || !pickupLoc || !dropLoc || !date) {
      showErrorMessage();
    } else {
      const modalDiv = document.querySelector(".booking-modal");
      removeErrorMessage();
      setShowModal(!showModal);
    }
  };

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

  //image url based on name
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
          // onClick={openModal}
          className={`modal-overlay ${showModal ? "active-modal" : ""}`}
        ></div>

        {/* form */}
        <form className="border m-5 p-5 text-center" id="bookCar">
          <h1 className="heading">Book your car</h1>

          <p className="error-message">All fields required!</p>

          <div className="row ">
            {/* car name */}
            <div className="col text-center">
              <b>
                Select Car <span>*</span>
              </b>
              <select
                name=""
                id=""
                className="form-control text-center"
                onChange={getCar}
              >
                <option key={0}></option>
                {CAR_DATA.map((cars, i) => {
                  const [car] = cars;
                  return (
                    <option key={i + 1} placeholder="choose">
                      {car.name}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Pickup location */}
            <div className="col text-center">
              <b>
                Pickup location <span>*</span>
              </b>
              <select
                name=""
                id=""
                className="form-control text-center"
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
            <div className="col text-center">
              <b>
                Drop location <span>*</span>
              </b>
              <select
                name=""
                id=""
                className="form-control text-center"
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
            <div className="col row__date">
              <b>
                Choose date <span>*</span>
              </b>
              <input type="date" onChange={getDate} />
            </div>
          </div>
          {/* Button trigger modal  */}
          <button
            type="submit"
            className="btn btn-primary"
            onClick={openModal}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Book car
          </button>
        </form>
      </section>
      {/* modal */}

      <div
        className={`modal fade booking-modal ${
          showModal ? "active-modal" : ""
        }`}
        id="exampleModal"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Confirm reservation
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={openModal}
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <h1>Congratulations🥳</h1>
                <h3>Your booking details are as follows :</h3>
                <div className="car-image ">
                  <img src={imgUrl} alt="car image" className="img-fluid" />
                </div>
                <h2>{carName}</h2>
                <p>
                  Booked for {date} from {pickupLoc} to {dropLoc}
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={openModal}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
    </>
  );
};

export default BookCar;
