import React from "react";

function Footer() {
  return (
    <>
      <footer className="col-md-12 text-center bg-dark text-light py-3">
        <p>&copy; {new Date().getFullYear()} FakeStore Inc.</p>
      </footer>
    </>
);
}

export default Footer;
