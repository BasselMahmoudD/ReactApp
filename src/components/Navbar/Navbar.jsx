import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [about, setAbout] = useState({});
  const [portfolio, setPortfolio] = useState();
  const [contact, setContact] = useState();

  const handleFirst = (event) => {
    setAbout({ backgroundColor: "#1abc9c", borderRadius: "15px" });
    setPortfolio({});
    setContact({});
  };
  const handleSecond = (event) => {
    setPortfolio({ backgroundColor: "#1abc9c", borderRadius: "15px" });
    setAbout({});
    setContact({});
  };
  const handleThird = (event) => {
    setPortfolio({});
    setAbout({});
    setContact({ backgroundColor: "#1abc9c", borderRadius: "15px" });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            START FRAMEWORK
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                  onClick={handleFirst}
                  style={about}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/portfolio"
                  onClick={handleSecond}
                  style={portfolio}
                >
                  PORTFOLIO
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/contact"
                  onClick={handleThird}
                  style={contact}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
