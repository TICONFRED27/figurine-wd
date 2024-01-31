/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        <li className="navbar__li">
          <a className="navbar__a" href="#">
            Acceuil
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#">
            Ateliers
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#">
            Catalogue
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
