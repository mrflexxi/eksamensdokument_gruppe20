// Home.jsx

// Koden definerer en komponent kalt Forsiden og er ansvarlig for å vise hovedinnholdet på nettsiden vår, 
// Den tar imot tre prop-variabler: pokeData (en array med Pokémon-data),
// loading (en boolsk verdi som indikerer om dataene lastes inn), og
// pokemonTypes (en array med Pokémon-typer).

import PropTypes from "prop-types";
import MainPokemonsSection from "./PokeCard";
import TypesSection from "./TypeCard";

const Forsiden = ({ pokeData, loading, pokemonTypes }) => {
    return (
        <main className="Home-Container">
            <section className="Home-MainPokemons">
                {!loading && pokeData && pokeData.length > 0 && (
                    <MainPokemonsSection
                        pokemon={pokeData}
                        loading={loading}
                    />
                )}
            </section>
            {!loading && (
                <section className="Home-Types">
                    <TypesSection
                        pokemonTypes={pokemonTypes}
                    />
                </section>
            )}
        </main>
    );
};

Forsiden.propTypes = {
    pokeData: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    pokemonTypes: PropTypes.array.isRequired
  };

export default Forsiden;