// Home.jsx

import MainPokemonsSection from "./PokeCard";
import TypesSection from "./TypeCard";

const Forsiden = ({ pokeData, pokemonTypes }) => {
  return (
    <main className="Home-Container">
      <section className="Home-MainPokemons">
        <MainPokemonsSection pokemon={pokeData} />
      </section>
      <section className="Home-Types">
        <TypesSection pokemonTypes={pokemonTypes} />
      </section>
    </main>
  );
};

export default Forsiden;