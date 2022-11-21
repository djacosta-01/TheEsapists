import "./App.css";
import { SignIn, SignOut, useAuthentication } from "../services/authService";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome! Enter below, if you dare.
        <SignIn />
        {/* <button class="logInButton">Enter the depths of the Keck Lab</button> */}
      </header>
    </div>
  );
}

export default App;
