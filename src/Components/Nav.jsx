import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">JOHN DOE</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">SERVICES</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">PORTFOLIO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">CONTACT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mentions">MENTIONS LEGALES</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
