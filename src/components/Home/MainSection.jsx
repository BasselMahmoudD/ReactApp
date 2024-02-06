import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import avatar from "../../assets/images/avataaars.svg";
import "./MainSection.css";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function MainSection() {
  return (
    <>
      <section className="homeSection">
        <div className="container">
          <div className="content text-center">
            <div className="image w-25 m-auto">
              <img src={avatar} alt="avatar" className="w-75" />
            </div>
            <h1 className="mt-3">START FRAMEWORK</h1>
            <div className="icon">
              <i class="fa-solid fa-star star"></i>
            </div>
            <p className="m-3">Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </section>
    </>
  );
}
