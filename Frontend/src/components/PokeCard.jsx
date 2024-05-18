// PokeCard.jsx

const MainPokemonsSection = ({ pokemon }) => {
  return (
    <div>
      <h3>Main Pokemons</h3>
      <p>Seksjonen Main pokemons henter ut de ni første pokemonene fra pokemonapiet, 
        vise disse i henhold til skissen.</p>
      <p>Minimum for hva som skal skrives ut er navnet til pokemonen.</p>
      <p>Videre skal det trykkes på en pokemon og vise informasjon om pokemonen i en ny side</p> 
      <p>(Pokemon/navn_til_den_valgte_pokemon)</p>
    </div>
  );
};


export default MainPokemonsSection;
