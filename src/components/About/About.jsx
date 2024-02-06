import React from "react";
import "./About.css";
export default function About() {
  return (
    <>
      <section className="p-5">
        <div className="container text-center p-5">
          <h1>ABOUT COMPONENT</h1>
          <div className="icon">
            <i class="fa-solid fa-star star"></i>
          </div>
          <div className="row">
            <div className="col-md-6 text-start">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6 text-start">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
