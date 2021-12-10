import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Misc/Loading";
import "./Login.css";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, loading] = useAuthState(auth);

  const history = useHistory();
  useEffect(() => {
    if (loading) {
      <Loading />;
    }
  }, [user, loading]);
  const signInWithEmailAndPassword = async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password).then((response) => {
      // this works fine because response.message is a string
    });

    return history.replace("/dashboard");
  };
  return (
    <>
      <Navbar />

      <div className="main">
        <h1>Login Form </h1>
        <label className="Login_email">Username Email</label>
      <input className="Login_input"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
      />
      <label className="Login_password"> Password</label>
      <input className="Login_input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className="Login_button" onClick={() => signInWithEmailAndPassword(email, password)}>
        Login
      </button>

      <div>
        Don't have an account? <Link to="/register">Register</Link> now.
      </div>
      </div>
    </>
  );
};

export default Login;
