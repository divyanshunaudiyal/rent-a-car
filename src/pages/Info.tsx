import React from "react";
import Contact from "../Components/contact.tsx";

function Info() {
  return (
    <>
      <section className="info-page">
        <div className="container">
          <div className="contact-div__text">
            <h2>Need additional information?</h2>
            <p>
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <p>&nbsp; (123) 456-7869</p>
            <p>&nbsp; div.naudiyal@gmail.com</p>
            <p>&nbsp; Dehradun, Uttarakhand</p>
          </div>
          <div className="contact-div__form">
            <form>
              <label>
                Full Name <b>*</b>
              </label>
              <input type="text" placeholder='E.g: "Joe Shmoe"'></input>

              <label>
                Email <b>*</b>
              </label>
              <input type="email" placeholder="youremail@example.com"></input>

              <label>
                Tell us about it <b>*</b>
              </label>
              <textarea placeholder="Write Here.."></textarea>

              <button type="submit">&nbsp; Send Message</button>
            </form>
          </div>
        </div>
        <Contact />
      </section>
    </>
  );
}

export default Info;
