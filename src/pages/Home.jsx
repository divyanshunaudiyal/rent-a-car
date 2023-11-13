import React from "react";
import Navbar from "../Components/navbar";
import Section1 from "../Components/section1";
import PickCar from "../Components/PickCar";
import BookCar from "../Components/BookCar";
import Contact from "../Components/contact";
import Faq from "../Components/FAQ";
import Testimonials from "../Components/testimonials";
function Home() {
  return (
    <>
      <Section1 />
      <BookCar />
      <PickCar />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}

export default Home;
