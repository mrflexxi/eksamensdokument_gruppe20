// PokeCard.jsx

// Koden definerer en komponent kalt MainPokemonsSection, som er ansvarlig for å vise hovedpokémonene på forsiden av nettsiden. 
// Den mottar en liste med Pokémon-objekter som en prop kalt pokemon, og en loading boolean som indikerer om dataene fortsatt lastes. 
// For hver Pokémon i listen genererer den et Pokémon-kort som viser  nummer, bilde, navn og type(s). 
// Når brukeren klikker på et Pokémon-kort, bruker den Link-komponenten fra React Router for å omdirigere brukeren til den 
// tilsvarende Pokémon-siden. 

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MainPokemonsSection = ({ pokemon, loading }) => {
    return (
        <main className="home-PokemonsCard-container">
            {loading ? null : (
                <>
                    <h2 className="Pokemoms-Tittle">MAIN POKEMONS</h2>
                    <section className="PokemonsCard">
                        {pokemon && pokemon.map((item) => (
                            <Link to={`/pokemon/${item.name}`} key={item.name} className="PokemonsCard-face">
                                <p className="PokemonsCard-item-nr"># {item.id}</p>
                                <figure className="PokemonsCard-img">
                                    <img src={item.sprites.front_default} />
                                </figure>
                                <span className="PokemonsCard-details">
                                    <p className="PokemonsCard-name">Name: {item.name}</p>
                                    <p className="PokemonsCard-type">Type(s): 
                                            {item.types.map((type, index) => (
                                                <span key={index}>{type.type.name}{index !== item.types.length - 1 && ", "}</span>
                                            ))}
                                        </p>
                                </span>
                            </Link>
                        ))}
                    </section>
                </>
            )}
        </main>
    );
};

MainPokemonsSection.propTypes = {
    pokemon: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  };

export default MainPokemonsSection;
