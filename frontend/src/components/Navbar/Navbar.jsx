/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        <Link to="/">
          <li className="navbar__li">
            <a className="navbar__a" href="">
              Accueil
            </a>
          </li>
        </Link>
        <Link to="/atelier">
          <li className="navbar__li">
            <a className="navbar__a" href="">
              Atelier
            </a>
          </li>
        </Link>
        <li className="navbar__li">
          <a className="navbar__a" href="#Catalogue">
            Catalogue
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#Contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
