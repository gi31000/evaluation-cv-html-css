import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            JOHN DOE
          </NavLink>
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
                <NavLink className={({ isActive }) =>
                  "nav-link " + (isActive ? "fw-bold text-decoration-underline" : "")
                  }
                  to="/"
                >HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  "nav-link " + (isActive ? "fw-bold text-decoration-underline" : "")
                  }
                  to="/services"
                >SERVICES</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  "nav-link " + (isActive ? "fw-bold text-decoration-underline" : "")
                  }
                  to="/portfolio"
                >PORTFOLIO</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  "nav-link " + (isActive ? "fw-bold text-decoration-underline" : "")
                  }
                  to="/contact"
                >CONTACT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={({ isActive }) =>
                  "nav-link " + (isActive ? "fw-bold text-decoration-underline" : "")
                  }
                  to="/mentions"
                >MENTIONS LEGALES</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
