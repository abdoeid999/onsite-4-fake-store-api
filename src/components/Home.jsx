import React from "react";
import photo1 from "../assets/back.jpg";
import { NavLink } from "react-router-dom";

const heroStyle = {
  backgroundImage: `url(${photo1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function Home() {
  return (
    <div
      className="position-relative vh-100 d-flex align-items-center"
      style={heroStyle}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"
        style={{ zIndex: 1, pointerEvents: "none" }}
      ></div>

      {/* Content */}
      <div
        className="container position-relative text-white"
        style={{ zIndex: 2 }}
      >
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="fw-bold mb-3">Quality Meets Style</h1>
            <p className="fs-5 opacity-75">
              Discover premium electronics, jewelry, and fashion — all in one place.
            </p>
            <NavLink
              to="/products"
              className="btn btn-lg btn-primary"
              aria-label="Browse products"
            >
              Shop Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;