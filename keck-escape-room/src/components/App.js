import "./App.css";
import { useState, useEffect } from "react";
import { SignIn, SignOut, useAuthentication } from "../services/authService";
import { GamePage } from "../services/gameService";
import NavBar from "./Navbar";

function App() {
  const user = useAuthentication();
  const [games, setGames] = useState([]);
  const [game, setGame] = useState(null);

  return (
    <div className="App">
      <header>
        {!user ? (
          <SignIn />
        ) : (
          <div>
            <NavBar />
            <SignOut />
          </div>
        )}
        {/* {!user ? "" : <GamePage username={user?.displayName} />} */}
      </header>
    </div>
  );
}

export default App;
