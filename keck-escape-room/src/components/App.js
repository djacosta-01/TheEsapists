import "./App.css";
import { useState, useEffect } from "react";
import GamePage from "./GamePage";
import NavBar from "./Navbar";
import LoadGame from "../services/LoadGame";
import Game from "./Game";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Corner from './Corner';
import Couch from './Couch';
import Server from './Server';
import CoffeeTable from './CoffeeTable';
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
      {!user ? "" : <NavBar />}
      {!user ? <SignIn /> : <SignOut />}
      {!user ? "" : <GamePage username={user?.displayName} />}
      {!user ? "" : <LoadGame games={games} setGame={setGame} />}
      {/* {!user ? "" : <Game game={game} />} */}
      <Router>
        <Routes>
          <Route path='/corner' element={<Corner/>}/> 
          <Route path='/couch' element={<Couch/>}/> 
          <Route path='/server' element={<Server/>}/> 
          <Route path='/coffee-table' element={<CoffeeTable/>}/> 
        </Routes>
      </Router>

    </div>
  );
}

export default App;
