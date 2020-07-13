import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  var counter = 0;
  return (
    <div>
      <ul className="social_media_lists mr-0">
        <li className="nav-item border rounded-circle mx-2">
          <Link to="/">
            <i className="fa fa-facebook p-2" aria-hidden="true"></i>
          </Link>
        </li>
        <li className="nav-item border rounded-circle mx-2">
          <Link to="/">
            <i className="fa fa-google p-2" aria-hidden="true"></i>
          </Link>
        </li>
        <li className="nav-item border rounded-circle mx-2">
          <Link to="/">
            <i className="fa fa-twitter p-2" aria-hidden="true"></i>
          </Link>
        </li>
        <li className="nav-item border rounded-circle mx-2">
          <Link to="/">
            <i className="fa fa-linkedin p-2" aria-hidden="true"></i>
          </Link>
        </li>
        <li className="nav-item border rounded-circle mx-2">
          <Link to="/">
            <i className="fa fa-instagram p-2" aria-hidden="true"></i>
          </Link>
        </li>
      </ul>

      <nav className="navbar navbar-expand-lg navbar-light   ">
        <img
          src={process.env.PUBLIC_URL + "img/logo.png"}
          alt="logo"
          className="img-fluid rounded-circle p-2"
          style={{ width: "4.9em", padding: "0" }}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul
            className="navbar-nav m-auto ml-md-5"
            style={{ padding: "0.6rem" }}
          >
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Pages
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav   mr-md-5">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                SignIn
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                SignUp
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/">
                <div className="cart-icon">
                  <i className="fa fa-shopping-cart p-2" aria-hidden="true">
                    <div className="cart-item"></div>
                    <span className="shopping-counter">{counter}</span>
                  </i>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
