import React from "react";
import photo1 from "../assets/back.jpg";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div
      className="position-relative vh-100 d-flex align-items-center"
      style={{
        backgroundImage: `url(${photo1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

      <div className="container position-relative text-white">
        <div className="row">
          <div className="col-md-6 text-start">
            <h1 className="fw-bold mb-3">Quality Meets Style</h1>
            <p className="fs-5 opacity-50">
              Discover our curated collection of premium electronics, jewelry, and fashion.
            </p>
            <NavLink to="/products" className="btn btn-lg btn-primary">shop now</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
