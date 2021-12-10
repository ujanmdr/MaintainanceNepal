import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Link, useHistory } from "react-router-dom";
import { auth, db, app } from "../firebase";
import "./Register.css";
import logoPic from '../Images/login.jpg';

const Register = () => {
  const [fileUrl, setFileUrl] = useState();
  const history = useHistory();

  const onFileChange = async (e) => {
    const file = e.target.files[0];

    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const status = e.target.status.value;
    const password = e.target.password.value;

    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;

    if (!name || !fileUrl || !email || !password) {
      return (fileUrl = "https://clipground.com/images/clipart-profile-6.jpg");
    }
    await db
      .collection("users")
      .doc(user.uid)
      .set({
        uid: user.uid,
        name: name,
        status: status,
        image: fileUrl,
        email: email,
        password: password,

        isVerified: "false",
      })
      .then(() => alert("User Created"))
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    return history.push("/");
  };
  return (
    <>
    <div className="main">
      <div className="left">
      <img className="loginpic" src={logoPic} alt="" ></img>
      </div>
      <div className="right" >
        <h1>Register Form</h1>
        <form className="Register_form" onSubmit={onSubmit}>
        <label className="register-name">Full Name</label>
        <input className="register-input" type="text" name="name" placeholder="Enter Full Name" required />
        <label className="register-email">Email</label>
        <input className="register-input" type="text" name="email" placeholder="Enter Email Address" required />
        <label className="register-roles">Roles</label>
        <select  name="status" id="status">
          <option value="Viewer">Viewer</option>
          <option value="Resource">Resource</option>
        </select>
        <label className="register-password">Password</label>
        <input className="register-input"
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />
        <input type="file" onChange={onFileChange} required />
        <button className="register-button">Register</button>
        <div>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      </form>
      </div>
      </div>
    </>
  );
};

export default Register;
