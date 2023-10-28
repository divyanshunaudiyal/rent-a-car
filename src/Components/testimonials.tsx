import React from "react";
import User1 from "../images/testimonial-images/user1.png";
import User2 from "../images/testimonial-images/user2.png";

const Testimonials = () => {
  return (
    <div className="testimonials-container " id="testimonials">
      <div className="testimonials-container__title ">
        <h3>Reviewed by people</h3>
        <h1>Client testimonials</h1>
        <p>
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </div>
      {/* title div end */}
      <div className="testimonials-container__client ">
        <section>
          <h6>
            "We rented a car from this website and had an amazing experience!
            The booking was easy and the rental rates were very affordable. "
          </h6>
          <div className="client-details client-1">
            <img src={User1} alt="client-image" />
          </div>
        </section>

        <section>
          <h6>
            "We rented a car from this website and had an amazing experience!
            The booking was easy and the rental rates were very affordable. "
          </h6>
          <div className="client-details client-2">
            <img src={User2} alt="client-image" />
          </div>
        </section>
      </div>
    </div>
  );
};
export default Testimonials;
