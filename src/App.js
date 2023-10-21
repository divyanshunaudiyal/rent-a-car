import React from "react";
import Navbar from "./Components/navbar.tsx";
import Section1 from "./Components/section1.tsx";
import BookCar from "./Components/BookCar.tsx";
import "./Styles/App.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <Section1 />
      <BookCar />
    </>
  );
};

export default App;
