import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

export const Navbar = () => {
  return (
    <div className="main">
      <Link to="/" className="navbar1">
        Home
      </Link>
      <Link to="/admin-login" className="navbar1">
        Admin-LogIn
      </Link>
    </div>
  );
};
