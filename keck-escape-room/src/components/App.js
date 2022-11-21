import "./App.css";
import { SignIn, SignOut, useAuthentication } from "../services/authService";

function App() {
  const user = useAuthentication();
  return (
    <div className="App">
      <header id="App-header">{!user ? <SignIn /> : <SignOut />}</header>
    </div>
  );
}

export default App;
