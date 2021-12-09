import React from "react";
import { Link } from "react-router-dom";
import { auth, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Navbar.css";
function Navbar() {
  const [user] = useAuthState(auth);
  return (
    <>
      <header className="navbar">
        {user && (
          <div>
            <Link to="/" className="abs">
              ResourceSearch
            </Link>
            <Link to="/" className="abs">
              Home
            </Link>
            <Link to="/resource" className="abs">
              Resource
            </Link>

            <Link to="/about" className="abs">
              About
            </Link>
            <Link to="/contact" className="abs">
              Contact
            </Link>
            <button onClick={logout}>Logout</button>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        )}
        {!user && (
          <div>
            <Link to="/" className="abs">
              ResourceSearch
            </Link>
            <Link to="/" className="abs">
              Home
            </Link>

            <Link to="/about" className="abs">
              About
            </Link>
            <Link to="/contact" className="abs">
              Contact
            </Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
