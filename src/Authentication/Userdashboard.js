import React from "react";

import Usernavbar from "../Components/Navbar/Usernavbar";

const Userdashboard = ({ userdata }) => {
  return (
    <div>
      <Usernavbar userdata={userdata} />

      <center>
        <h1>Welcome to Dashboard</h1>
        <h1>Hello, {userdata.name}</h1>
        <img src={userdata.image} height="200" width="100" alt="" />
        <h1>{userdata.email}</h1>
        <h2>About Me:</h2>
        <br />
        <h2>
          <b>{userdata.about}</b>
        </h2>
      </center>
    </div>
  );
};

export default Userdashboard;
