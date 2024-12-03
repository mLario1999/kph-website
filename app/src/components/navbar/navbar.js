import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navsection upper">
        <Link to="/about">Om os</Link>
        <Link to="/contact">Kontakt</Link>
      </div>
      <div className="navsection lower">
        <Link to="/home">Home</Link>
        <Link to="/chalk-paintings">Kalkmalerier</Link>
        <Link to="/stone">Sten</Link>
        <Link to="/painted-objects">Bemalede genstande</Link>
        <Link to="/references">Referencer</Link>
      </div>
    </nav>
  );
}

export default NavBar;
