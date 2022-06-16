import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import surrealEstateLogo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        className="surreal-estate-logo"
        data-testid="surreal-estate-logo"
        src={surrealEstateLogo}
        alt="Surreal Estate logo"
      />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-property">Add a property</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
