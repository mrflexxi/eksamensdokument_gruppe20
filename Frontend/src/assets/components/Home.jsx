// Home.jsx

import MainPokemonsSection from "./PokeCard";
import TypesSection from "./TypeCard";

const Forsiden = ({ pokeData, pokemonTypes }) => {
  return (
    <main className="Home-Container">
      <p>Dette er forsiden til Pokedex. Den skal ha to sectioner, den ene for pokemon og den andre for pokemonstyper.</p>
      <p>Et pokemonkort i home, type og søkeresultatet skal kunne klikkes på (enten hele spillkortet, eller med en knapp/lenke) </p>
      <p>Når linken åpnes, brukes Pokemon komponentet og skal fremvise informasjon om pokemonen som ble trykket på.</p>
      <hr />
      <section className="Home-MainPokemons">
        {/* eventuelle funksjoner her */}
        <MainPokemonsSection pokemon={pokeData} />
      </section>
        {/* eventuelle funksjoner her */}
      <section>
        <TypesSection pokemonTypes={pokemonTypes} />
      </section>
    </main>
  );
};

export default Forsiden;
