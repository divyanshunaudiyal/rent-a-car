import React from "react";
import Navbar from "./Components/navbar.tsx";
import Section1 from "./Components/section1.tsx";
import BookCar from "./Components/BookCar.jsx";
import Models from "./Components/models.tsx";
import Testimonials from "./Components/testimonials.tsx";
import Faq from "./Components/FAQ.tsx";
import Contact from "./Components/contact.tsx";
import "./Styles/App.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <Section1 />
      <BookCar />
      <Models />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
};

export default App;
