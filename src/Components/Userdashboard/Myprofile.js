import React from "react";

import { useSelector } from "react-redux";
import Usernavbar from "../Navbar/Usernavbar";

const Myprofile = () => {
  const userdata = useSelector((state) => state.firebase.profile);
  return (
    <>
      <Usernavbar />
      <div>
        <center>
          <h1>My Profile</h1>
          <h2>UID:{userdata.uid}</h2>
          <h2>NAME:{userdata.name}</h2>

          <img src={userdata.image} height="200px" width="200px" />
          <h2>EMAIL:{userdata.email}</h2>
        </center>
      </div>
    </>
  );
};

export default Myprofile;
