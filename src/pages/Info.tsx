import React from "react";
import Contact from "../Components/contact.tsx";

function Info() {
  return (
    <>
      <section className="info-page">
        <div className="info-container">
          <div className="contact-div__text">
            <h1>Need additional information?</h1>
            <p>
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <p> (123) 456-7869</p>
            <p> div.naudiyal@gmail.com</p>
            <p> Dehradun, Uttarakhand</p>
          </div>
          <div className="contact-div__form">
            <form>
              <label>
                Full Name <b>*</b>
                <input type="text" placeholder='E.g: "Joe Shmoe"'></input>
              </label>
              <label>
                Email <b>*</b>
                <input type="email" placeholder="youremail@example.com"></input>
              </label>
              <label>
                Tell us about it <b>*</b>
                <input type="text" placeholder="Write Here.."></input>
              </label>
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
