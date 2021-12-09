import React from "react";
import { Link } from "react-router-dom";

const Usernavbar = ({ userdata }) => {
  return (
    <header className="navbar">
      <Link to="/dashboard" className="abs">
        Dashboard
      </Link>
      <Link to="/myprofile" className="abs">
        My Profile
      </Link>

      <Link to="/addprofile" className="abs">
        Add Profile
      </Link>

      <Link to="/" className="abs">
        Return to Homepage
      </Link>
    </header>
  );
};

export default Usernavbar;
