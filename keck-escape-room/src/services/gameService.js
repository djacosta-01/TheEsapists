import { useState, useEffect } from "react";
import { SignOut } from "./authService";
import "./gameService.css";
export function GamePage({ username }) {
  const [name, setName] = useState("");
  const CHEAT_CODE = "Julian";
  let nameComparison = name === username || name === CHEAT_CODE;
  function submitName(e) {
    e.preventDefault();
  }

  return (
    <div className="blah">
      <p>Game 1</p>
      <form id="name-form" onSubmit={submitName}>
        <input
          id="username-input"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {nameComparison ? (
        <div className="blah">YOU HAVE ESCAPED!!</div>
      ) : (
        <p className="blah">Incorrect </p>
      )}
    </div>
  );
}
