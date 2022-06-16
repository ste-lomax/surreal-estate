import React from "react";
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
        <li className="navbar-links-item">View Properties</li>
        <li className="navbar-links-item">Add a property</li>
      </ul>
    </div>
  );
};

export default NavBar;
