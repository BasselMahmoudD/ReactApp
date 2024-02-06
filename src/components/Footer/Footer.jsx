import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="section1">
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
              </div>
              <div className="col-md-4 text-center">
                <h3>AROUND THE WEB</h3>
                <i className="fa-brands fa-facebook mx-1 Icon rounded-circle p-2 "></i>
                <i className="fa-brands fa-twitter mx-1 Icon rounded-circle p-2 "></i>
                <i className="fa-brands fa-linkedin mx-1 Icon rounded-circle p-2 "></i>
                <i className="fa-solid fa-globe mx-1 Icon rounded-circle p-2 "></i>
              </div>
              <div className="col-md-4 text-center">
                <h3>ABOUT FREELANCER</h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section2">
          <p className="text-center">Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}
