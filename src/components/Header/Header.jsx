import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faShareNodes } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <div className="header sticky-top clearfix ">
      <nav className="navbar navbar-expand-md ">
        <div className="container-fluid px-5">
          <Link className="navbar-brand" to="/">
          Al Quran
          </Link>
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
                <Link className="nav-link active" to="/home"> Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/audio-quran"> Audio Quran</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reading"> Reading</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/translation"> Translation</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 " to="/share" title="Share"> <FontAwesomeIcon icon={faShareNodes} /> </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 " to="/setting" title="Setting"> <FontAwesomeIcon icon={faGear} /> </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
