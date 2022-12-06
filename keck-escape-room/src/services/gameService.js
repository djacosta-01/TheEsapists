import { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import escapeRoom from "../components/escapeRoom.png";
import "./gameService.css";
import { SignOut } from "../services/authService";

export function GamePage({ username }) {
  return (
    <div className="game-container">
      <div id="sign-out-container">
        <NavBar />
        <SignOut />
      </div>
      <div id="map-container">
        <img src={escapeRoom} alt="escape room" />
        <p id="text">Welcome to Keck!! Escape if you can...</p>
      </div>
    </div>
  );
}
