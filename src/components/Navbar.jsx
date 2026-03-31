import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-dark">
        <div className="container">
          <div className="p-4 border border-primary rounded-3 mx-2"></div>
          <NavLink className="navbar-brand text-light" to='/'>FakeStore</NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active text-primary" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/about">About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
