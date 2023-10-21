import React, { useEffect, useState } from "react";
import CAR_DATA from "./CarData.js";

const BookCar = () => {
  const [carName, setCar] = useState("");
  const [pickupLoc, setPickup] = useState("");
  const [dropLoc, setDrop] = useState("");
  const [date, setDate] = useState("");

  function getCar(e) {
    setCar(e.target.value);
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

  // modal

  return (
    <>
      {/* form */}
      <form className="border m-5 p-5 text-center" id="bookCar">
        <b>Book your car🏎️</b>
        <div className="row my-5">
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
              <option key={0}>Click to choose car</option>
              {CAR_DATA.map((cars, i) => {
                const [car] = cars;
                return <option key={i + 1}>{car.name}</option>;
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
              <option value="">Click to Choose Pick up location </option>
              <option value="">Delhi</option>
              <option value="">Dehradun</option>
              <option value="">Gurgaon</option>
              <option value="">Noida</option>
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
              <option value="">Click to Choose drop location </option>
              <option value="">Delhi</option>
              <option value="">Dehradun</option>
              <option value="">Gurgaon</option>
              <option value="">Noida</option>
            </select>
          </div>
          <div className="col text-center">
            <b>Choose date</b>
            <input type="date" onChange={getDate} />
          </div>
        </div>
        <button
          className="btn btn-outline-danger"
          type="submit"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Submit details
        </button>
        <div className="modal fade" id="exampleModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
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
      </form>
      {/*  */}
    </>
  );
};

export default BookCar;
