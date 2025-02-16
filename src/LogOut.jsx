import React from "react";
import { auth, signOut } from "./firebaseConfig";
import { useNavigate } from "react-router-dom"; 
import "../src/App.css";

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };


  return (
    <div>
      <h1>Welcome to your profile!</h1>
      <button onClick={handleLogout} className="logout">Log Out</button>
    </div>
  );
};

export default LogOut;
