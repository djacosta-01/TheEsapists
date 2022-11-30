import { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import "./gameService.css";

export function GamePage({ username }) {
  const [name, setName] = useState("");
  const [nameEntry, setNameEntry] = useState("");
  const CHEAT_CODE = "Julian";
  let nameComparison = name === username || name === CHEAT_CODE;

  function submitName(e) {
    e.preventDefault();
    setName(nameEntry);
    setNameEntry("");
  }

  return (
    <div className="game-container">
      <p>Game 1</p>

      <form id="name-form" onSubmit={submitName}>
        <input
          id="username-input"
          type="text"
          placeholder="Enter your name"
          value={nameEntry}
          onChange={(e) => setNameEntry(e.target.value)}
        />
      </form>

      {nameComparison ? (
        <p className="blah">YOU HAVE ESCAPED!!</p>
      ) : (
        <p className="blah">Incorrect </p>
      )}
    </div>
  );
}
