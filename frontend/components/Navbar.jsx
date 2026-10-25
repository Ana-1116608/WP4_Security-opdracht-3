import "../style/navbar.css";
import { Link} from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav" >
      <a href="/" className="project-overzicht">Overzicht</a>
      <ul>
        <li className="active">
          <a href="/saved_card">Opgeslagen Projecten</a>
        </li>
      </ul>
    </nav>
  );
};
