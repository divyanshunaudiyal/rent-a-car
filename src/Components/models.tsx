import React, { useState } from "react";
import CAR_DATA from "./CarData.js";
import Golf6 from "../images/Cars-big/golf6.jpg";
import Audi from "../images/Cars-big/audi.jpg";
import Benz from "../images/Cars-big/benz.jpg";
import Bmw from "../images/Cars-big/bmw.jpg";
import Passat from "../images/Cars-big/passatcc.jpg";
import Toyota from "../images/Cars-big/toyota.jpg";

const Models = () => {
  const [model, setModel] = useState("");

  const showModel = (e) => {
    setModel(e.target.value);
  };

  //find car based on model
  const [car] = CAR_DATA.find((elem) => {
    const [car] = elem;
    if (model == "") {
      return car.name == "Passat";
    } else return car.name == model;
  });

  let imgUrl: string;
  switch (model) {
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
      imgUrl = Bmw;
      break;
    case "Mercedes-Benz":
      imgUrl = Benz;
      break;
    case "Passat":
      imgUrl = Passat;
      break;
    default:
      imgUrl = Passat;
  }

  return (
    <div className="model-container" id="model">
      <div className="model-container__title">
        <h1>Models</h1>
        <h3>Get details of our cars</h3>
      </div>
      <div className="model-container__car ">
        <div className="car-list ">
          {CAR_DATA.map((cars, i) => {
            const [car] = cars;
            return (
              <button key={i + 1} value={car.name} onClick={showModel}>
                {car.name}
              </button>
            );
          })}
        </div>

        <div className="car-image">
          <img src={imgUrl} alt="car-image " />
        </div>
        <div className="car-specs">
          <table>
            <tbody>
              <tr>
                <td>name</td>
                <td>{car.name}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>{car.price}</td>
              </tr>
              <tr>
                <td>Year</td>
                <td>{car.year}</td>
              </tr>
              <tr>
                <td>Doors</td>
                <td>{car.doors}</td>
              </tr>
              <tr>
                <td>AC</td>
                <td>{car.air}</td>
              </tr>
              <tr>
                <td>Transmissin</td>
                <td>{car.transmission}</td>
              </tr>
              <tr>
                <td>Fuel</td>
                <td>{car.fuel}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Models;
