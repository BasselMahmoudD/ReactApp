import React, { useState } from "react";
import "./Portfolio.css";
import photo1 from "../../assets/images/poert1.png";
import photo2 from "../../assets/images/port2.png";
import photo3 from "../../assets/images/port3.png";
export default function Portfolio() {
  const [imgLayer, setImgLayer] = useState("d-none");
  const [image, setImage] = useState("");
  function showLayer(img) {
    setImgLayer({ display: "block" });
    setImage(img);
  }
  return (
    <>
      <div className="sectionPortfolio">
        <div className="container text-center p-2">
          <h1>PORTFOLIO COMPONENT</h1>
          <div className="iconLine mb-3">
            <i className="fa-solid fa-star stars"></i>
          </div>
          <div className="row g-5">
            <div className="col-md-4 item">
              <div className="img w-100" onClick={() => showLayer(photo1)}>
                <img src={photo1} className="w-100" alt="1" />
                <div className="Layer">
                  <i className="text-white fa-solid fa-plus fa-6x" />
                </div>
              </div>
            </div>
            <div className="col-md-4 item">
              <div className="img w-100" onClick={() => showLayer(photo2)}>
                <img src={photo2} className="w-100" alt="1" />
                <div className="Layer">
                  <i className="text-white fa-solid fa-plus fa-6x" />
                </div>
              </div>
            </div>
            <div className="col-md-4 item">
              <div className="img w-100" onClick={() => showLayer(photo3)}>
                <img src={photo3} className="w-100" alt="1" />
                <div className="Layer">
                  <i className="text-white fa-solid fa-plus fa-6x" />
                </div>
              </div>
            </div>
            <div className="col-md-4 item">
              <div className="img w-100" onClick={() => showLayer(photo1)}>
                <img src={photo1} className="w-100" alt="1" />
                <div className="Layer">
                  <i className="text-white fa-solid fa-plus fa-6x" />
                </div>
              </div>
            </div>
            <div className="col-md-4 item">
              <div className="img w-100" onClick={() => showLayer(photo2)}>
                <img src={photo2} className="w-100" alt="1" />
                <div className="Layer">
                  <i className="text-white fa-solid fa-plus fa-6x" />
                </div>
              </div>
            </div>
            <div className="col-md-4 item">
              <div className="img w-100" onClick={() => showLayer(photo3)}>
                <img src={photo3} className="w-100" alt="1" />
                <div className="Layer">
                  <i className="text-white fa-solid fa-plus fa-6x" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` bigLayer d-flex justify-content-center align-items-center ${imgLayer}`}
      >
        <div className="imgLayer w-50">
          <img src={image} className="w-100" />
        </div>
      </div>
    </>
  );
}
