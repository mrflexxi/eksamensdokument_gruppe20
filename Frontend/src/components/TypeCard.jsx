// HomeTypesSection.jsx

// Koden definerer en komponent kalt TypesSection og er ansvarlig for å vise en seksjon som viser ulike typer av Pokémon. 
// Den mottar en liste med pokemonTypes som prop, og for hver type i listen, genererer den en lenke til en spesifikk typside ved hjelp av React Router. 
// Hver typevisning inkluderer et bilde av typen og navnet på typen. Hvis det ikke er noen typer tilgjengelige (dvs. pokemonTypes ikke er en array), 
// vil komponenten ikke vise noen innhold. Dette bidrar til en dynamisk og navigerbar brukeropplevelse ved å tillate brukere å utforske forskjellige typer av Pokémon gjennom lenkene.

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TypesSection = ({ pokemonTypes }) => {
    if (!Array.isArray(pokemonTypes)) {
        return null;
    }

    return (
        <main className="home-Type-container">
            <h2 className="Types-Tittle">TYPES</h2>
            <section className="type-grid">
                {pokemonTypes.map((type, index) => (
                    <section key={index} className={`type-box ${type.name}`}>
                        <Link to={`/type/${type.name}`} className="type-link">
                            <figure className="type-content">
                                <img src={`src/assets/TypeLogo/${type.name}.png`} alt={`${type.name} type`} className="type-image" />
                                <figcaption className="type-details">
                                    <div className="type-name">{type.name}</div>
                                </figcaption>
                            </figure>
                        </Link>
                    </section>
                ))}
            </section>
        </main>
    );
};

TypesSection.propTypes = {
    pokemonTypes: PropTypes.array.isRequired
  };

export default TypesSection;
