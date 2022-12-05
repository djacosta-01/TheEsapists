import { useState, useEffect } from "react";
import "./authService.css";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
// import Navbar from "../components/Navbar";

export function SignIn() {
  return (
    <div id="signInContainer">
      <p>Welcome! Enter below, if you dare. </p>
      <button
        onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
        id="logInButton"
      >
        Enter the depths of the Keck Lab
      </button>
    </div>
  );
}

export function SignOut() {
  return (
    <div class="signOutContainer">
      Hello, {auth.currentUser?.displayName} &nbsp;
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  );
}

export function useAuthentication() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
  }, []);
  return user;
}
