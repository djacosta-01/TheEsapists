import "./App.css";
import { SignIn, SignOut, useAuthentication } from "../services/authService";
import { GamePage } from "../services/gameService";
import NavBar from "../components/Navbar";

function App() {
  const user = useAuthentication();
  return (
    <div className="App">
      <header>{!user ? <SignIn /> : <SignOut />}</header>
      {!user ? "" : <NavBar />}
      {user ? <GamePage username={user?.displayName} /> : ""}
    </div>
  );
}

export default App;
