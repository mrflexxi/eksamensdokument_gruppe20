// Header.jsx

import { Link } from "react-router-dom";

const Header = ({ searchTerm, setSearchTerm }) => {

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      return `/search/${searchTerm}`;
    }
    return null;
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

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
          placeholder="Søk etter pokemon"
          value={searchTerm}
          onChange={handleSearchChange} 
        />
        <Link to={handleSearch()}>
          <button type="button">
            <i className="material-icons search-icon">search</i>
          </button>
        </Link>
      </div>
    </header>
  );
};


export default Header;
