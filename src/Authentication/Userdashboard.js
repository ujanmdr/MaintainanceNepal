import React from "react";
import { Link } from "react-router-dom";
const Userdashboard = ({ image, name }) => {
  return (
    <div>
      <Link to="/">
        <h1>Return To Homepage</h1>
      </Link>
      <h1>Hello {name}</h1>
      <img src={image} height="200" width="100" alt="" />
    </div>
  );
};

export default Userdashboard;
