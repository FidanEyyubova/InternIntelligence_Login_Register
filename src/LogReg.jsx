import React, { useState } from "react";
import "../src/App.css";
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LogReg = () => {
  const [active, setActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleRegisterActive = () => {
    setActive(true);
  };

  const handleLoginActive = () => {
    setActive(false);
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      setEmail("");
      setPassword("");
      setUsername("");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLoginAccount = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/profile");
      setEmail("");
      setPassword("");
      setUsername("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={`container ${active ? "active" : ""}`} id="container">
      <div className="sign-up">
        <form onSubmit={handleCreateAccount}>
          <h1>Create Account</h1>
          <input
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div className="sign-in">
        <form onSubmit={handleLoginAccount}>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#">Forgot password</a>
          <div className="remember-me">
            <input type="checkbox" />
            <span>Remember Me</span>
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>

      <div className="toogle-container">
        <div className="toogle">
          <div className="toogle-panel toogle-left">
            <h1>Hello, User!</h1>
            <p>If you already have an account</p>
            <button className="hidden" onClick={handleLoginActive}>
              Sign In
            </button>
          </div>
          <div className="toogle-panel toogle-right">
            <h1>Hello, User!</h1>
            <p>If you don't have an account</p>
            <button className="hidden" onClick={handleRegisterActive}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogReg;
