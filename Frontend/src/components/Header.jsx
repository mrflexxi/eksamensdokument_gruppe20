// Header.jsx

// Denne koden definerer en Header-komponent for nettsiden vår. 
// Headeren inkluderer et søkefelt der brukere kan skrive inn navnet på en Pokémon. Når brukeren 
// skriver inn et søkeord og trykker på enter, og brukeren ledes til en side som viser søkeresultaten for den spesifikke Pokémonen. 
// Headeren inneholder også et bilde av en Pokeball og et navigasjonsmenyelement for "TEAMS". 

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ searchTerm, setSearchTerm }) => {
  const [pokeballImage, setPokeballImage] = useState(null);

  useEffect(() => {
    const fetchPokeballImage = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/item/poke-ball");
        const data = await response.json();
        setPokeballImage(data.sprites.default);
      } catch (error) {
        console.error("Error fetching pokeball image:", error);
      }
    };

    fetchPokeballImage();
  }, []);

  const handleSearch = () => {
    let normalizedSearchTerm = searchTerm.toLowerCase();
    if (normalizedSearchTerm.trim() !== "") {
      return `/search/${normalizedSearchTerm}`;
    }
    return null;
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      window.location.href = handleSearch();
    }
  };

  return (
    <header>
      <nav className="nav-container">
      {pokeballImage && <img src={pokeballImage} alt="Pokeball" style={{ width: "40px", height: "40px" }} />}
        <Link to="/">
          <h2 className="logo">
            UIN POKEDEX{" "}
          </h2>
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
          placeholder="Search for Pokemon"
          value={searchTerm}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
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


Header.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default Header;
