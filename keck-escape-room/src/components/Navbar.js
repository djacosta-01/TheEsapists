import "./NavBar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  // let navigate = useNavigate();
  // const routeChange = () => {
  //   let path = "corner";
  //   navigate(path);
  // };
  return (
    <div id="nav-bar-container">
      <a href="corner"> Head to the corner</a>
      <a href="##">About</a>
    </div>
  );
}
