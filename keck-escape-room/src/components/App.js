import "./App.css";
import { SignIn, SignOut, useAuthentication } from "../services/authService";
import NavBar from "../components/Navbar";

function App() {
  const user = useAuthentication();
  return (
    <div className="App">
      <header id="App-header">{!user ? <SignIn /> : <SignOut />}</header>
      <NavBar />
    </div>
  );
}

export default App;
