import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import Usernavbar from "../Navbar/Usernavbar";
import { isLoaded } from "react-redux-firebase";

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
          <h2>Phone:{userdata.phone}</h2>
          <h2>Address:{userdata.address}</h2>
          <h2>Experience:{userdata.experience}</h2>
          <h2>About me:{userdata.about}</h2>
          <button type="submit">Edit profile</button>
        </center>
      </div>
    </>
  );
};

export default Myprofile;
