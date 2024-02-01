/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        <li className="navbar__li">
          <a className="navbar__a" href="#Acceuil">
            Acceuil
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#">
            Atelier
          </a>
        </li>
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
