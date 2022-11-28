import { SignOut } from "../services/authService";

export default function NavBar() {
  return (
    <nav>
      <a href="#">Home</a>
      <a>
        <SignOut />
      </a>
    </nav>
  );
}
