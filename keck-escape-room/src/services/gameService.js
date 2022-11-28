import { useState, useEffect } from "react";
import { SignOut } from "./authService";

export function GamePage() {
  return (
    <div id="test-game">
      <SignOut />
      <p>Game 1</p>
    </div>
  );
}
