// PokemonLoader.jsx

// Denne filen, PokemonLoader.jsx, definerer en enkel React-komponent kalt PokemonLoader. 
// Denne viser et animert ikon av en pokéball (loading.css) og en tekst som viser "Loading...". 
// Den brukes som et visuelt signal til brukeren mens Pokémon-data lastes inn.

const PokemonLoader = () => {
  return (
    <section className="pokemon-loader">
      <div className="pokeball"></div>
      <p>Loading...</p>
    </section>
  );
};

export default PokemonLoader;
