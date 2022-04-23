import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/main/home">
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/main/querylisting"
              >
                Queries
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Product
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                For Team
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/main/QueryListing">
                    QueryListing
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/main/ListVideo">
                    ListVideo
                  </NavLink>
                </li>

                <li>
                  <NavLink className="dropdown-item" to="/main/sidebar">
                    Something else here
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                tabindex="-1"
                aria-disabled="false"
              >
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2 mx-5 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button type="button" className="btn text-white btn-outline-info">
              Search
            </button>
            <NavLink
              className="btn bg-danger mx-4 text-white"
              type="submit"
              to="/main/Signup"
            >
              Signup
            </NavLink>
            <NavLink
              className="btn bg-success  text-white  outline-success"
              to="/main/Login"
              type="submit"
            >
              Login
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
