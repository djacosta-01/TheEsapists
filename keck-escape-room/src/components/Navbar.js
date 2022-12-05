import { SignOut } from "../services/authService";
import "./NavBar.css";
export default function NavBar() {
  return (
    <div id="nav-bar-container">
      <a class="homeNav" href="#">
        Home
      </a>
      <a class="loadGameNav" href="##">
        Load Game
      </a>
    </div>
  );
}
