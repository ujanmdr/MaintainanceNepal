import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Misc/Loading";

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

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={() => signInWithEmailAndPassword(email, password)}>
        Login
      </button>

      <div>
        <Link to="/reset">Forgot Password</Link>
      </div>
      <div>
        Don't have an account? <Link to="/register">Register</Link> now.
      </div>
    </>
  );
};

export default Login;
