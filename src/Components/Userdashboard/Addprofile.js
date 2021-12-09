import React, { useEffect, useState } from "react";
import Usernavbar from "../Navbar/Usernavbar";
import { useSelector } from "react-redux";
const Addprofile = () => {
  const userdata = useSelector((state) => state.firebase.profile);

  const onSubmit = () => {};

  useEffect(() => {}, [userdata]);
  return (
    <div>
      <Usernavbar />
      {/* {userdata.name ? ( */}
      <>
        <h2>Add Profile</h2>
        <form onSubmit={onSubmit}>
          <input type="text" name="address" placeholder="address" on />
          <input type="text" name="phone" placeholder="phone" />
          <input type="text" name="experience" placeholder="experience" />
          <input
            type="textarea"
            name="about"
            placeholder="about"
            rows="40"
            cols="50"
          />
          <h2>Certificate</h2>
          <input type="file" name="document" placeholder="document" />
          <button type="submit">Add Profile</button>
        </form>
      </>
      {/* ) : ( */}
      <>{/* <h1><center>Profile ALready Uploaded </center></h1> */}</>
      {/* )} */}
    </div>
  );
};

export default Addprofile;
