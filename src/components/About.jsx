import React from "react";

function About() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="fw-bold mb-4">About FakeStore</h2>

          <p className="fs-5 text-muted">
            FakeStore is a fictional e-commerce platform designed to demonstrate
            modern web development concepts using React and Redux.
          </p>

          <p className="fs-5 text-muted">
            It simulates a real shopping experience, allowing users to browse
            products, manage a cart, and explore application features — all
            without real transactions.
          </p>

          <div className="mt-4">
            <span className="badge bg-primary me-2">React</span>
            <span className="badge bg-success me-2">Redux</span>
            <span className="badge bg-dark">E-commerce</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;