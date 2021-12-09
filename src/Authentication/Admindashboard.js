import React from "react";
import { Link } from "react-router-dom";

const Admindashboard = ({ userdata }) => {
  return (
    <div>
      <Link to="/">
        <h1>Return To Homepage</h1>
      </Link>

      <h1>Welcome {userdata.name}</h1>
      <img src={userdata.image} height="200" width="100" alt="" />
    </div>
  );
};

export default Admindashboard;
