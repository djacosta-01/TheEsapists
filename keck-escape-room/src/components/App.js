import "./App.css";
import { SignIn, SignOut, useAuthentication } from "../services/authService";
import { GamePage } from "../services/gameService";
import NavBar from "../components/Navbar";

function App() {
  const user = useAuthentication();
  return (
    <div className="App">
      {/*Instead of <SignOut component, can make like a game service component which contains the sign out component */}
      {/* SignOut can be in Navabar*/}
      <header id="App-header">{!user ? <SignIn /> : <SignOut />}</header>
      <GamePage username={user?.displayName} />
    </div>
  );
}

export default App;
