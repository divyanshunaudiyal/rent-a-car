import React from "react";
import Navbar from "./Components/navbar.tsx";
import Section1 from "./Components/section1.tsx";
import BookCar from "./Components/BookCar.tsx";
import Models from "./Components/models.tsx";
import Testimonials from "./Components/testimonials.tsx";
import "./Styles/App.scss";

// import $ from "jquery";

// window.jQuery = $;
// window.$ = $;
const App = () => {
  return (
    <>
      <Navbar />
      <Section1 />
      <BookCar />
      <Models />
      <Testimonials />
    </>
  );
};

export default App;
