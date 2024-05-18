// Header.jsx

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="nav-container">
        <Link to="/">
          <h2 className="logo">UIN POKEDEX</h2>
        </Link>
        <ul>
          <li>
            <Link to="/teams">TEAMS</Link>
          </li>
        </ul>
      </nav>
      <div className="search">
        <input
          type="text"
          name="search"
          placeholder="Search for pokemon"
        />
          <button type="button">
            <i className="material-icons search-icon">search</i>
          </button>
      </div>
    </header>
  );
};

export default Header;
