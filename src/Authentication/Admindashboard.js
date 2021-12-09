import React from "react";
import { Link } from "react-router-dom";

const Admindashboard = ({ image }) => {
  return (
    <div>
      <Link to="/">
        <h1>Return To Homepage</h1>
      </Link>

      <h1>Welcome Admin</h1>
      <img src={image} height="200" width="100" alt="" />
    </div>
  );
};

export default Admindashboard;
