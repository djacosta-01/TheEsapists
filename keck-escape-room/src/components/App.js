import "./App.css";
import { useState, useEffect } from "react";
import GamePage from "./GamePage";
import NavBar from "./Navbar";
import LoadGame from "../services/LoadGame";
import Game from "./Game";
import { SignIn, SignOut, useAuthentication } from "../services/authService";
import { createNewGame, fetchGames } from "../services/gameService";

function App() {
  const user = useAuthentication();
  const [games, setGames] = useState([]);
  const [game, setGame] = useState(null);
  const [newGame, setNewGame] = useState(false);

  useEffect(() => {
    if (user) {
      fetchGames().then(setGames);
    }
  }, [user]);

  // Updates the database, then updates the internal React state
  function addGame({ title }) {
    createNewGame({ title }).then((game) => {
      setGame(game);
      setGames([game, ...games]);
      setNewGame(false);
    });
  }

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
      </header>
      {!user ? "" : <GamePage username={user?.displayName} />}
      {!user ? "" : <LoadGame games={games} setGame={setGame} />}
      {!user ? "" : <Game game={game} />}
    </div>
  );
}

export default App;
