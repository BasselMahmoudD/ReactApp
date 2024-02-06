import React, { useState } from "react";
import "./Contact.css";
export default function Contact() {
  const [label, setLabel] = useState({
    opacity: 0,
    translate: "0 40px",
    transition: "all 1s",
  });
  const [age, setAge] = useState({
    opacity: 0,
    translate: "0 40px",
    transition: "all 1s",
  });
  const [email, setEmail] = useState({
    opacity: 0,
    translate: "0 40px",
    transition: "all 1s",
  });
  const [password, setPassword] = useState({
    opacity: 0,
    translate: "0 40px",
    transition: "all 1s",
  });

  function displayUserLabel() {
    setLabel({ opacity: 1, translate: "0 0px", transition: "all 1s" });
  }
  function displayAgeLabel() {
    setAge({ opacity: 1, translate: "0 0px", transition: "all 1s" });
  }
  function displayEmailLabel() {
    setEmail({ opacity: 1, translate: "0 0px", transition: "all 1s" });
  }
  function displayPassLabel() {
    setPassword({ opacity: 1, translate: "0 0px", transition: "all 1s" });
  }

  return (
    <>
      <div className="sectionContact">
        <div className="container">
          <div className="w-75 m-auto">
            <h1>CONTACT SECTION</h1>
            <div className="iconLine mb-3">
              <i className="fa-solid fa-star stars"></i>
            </div>
            <div className="inputs w-75 m-auto text-start">
              <label style={label} className="label">
                UserName :
              </label>
              <input
                name="name"
                type="text"
                placeholder="UserName"
                className=" w-100 my-1 input p-3"
                onInput={displayUserLabel}
              />
              <label style={age} className="label">
                UserAge :
              </label>
              <input
                name="age"
                type="text"
                placeholder="UserAge"
                className="w-100 my-1 input p-3"
                onInput={displayAgeLabel}
              />
              <label style={email} className="label">
                UserEmail :
              </label>
              <input
                name="email"
                type="email"
                placeholder="UserEmail"
                className="w-100 my-1 input p-3"
                onInput={displayEmailLabel}
              />
              <label style={password} className="label">
                UserPassword :
              </label>
              <input
                name="pass"
                type="password"
                placeholder="UserPassword"
                className="w-100 my-1 input p-3"
                onInput={displayPassLabel}
              />
              <button className="btn my-4">send Message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
