// API_PokeCard.jsx

// Denne funksjonen henter informasjon om Pokémon som skal vises på forsiden av nettsiden.
// Den bruker paginering ved hjelp av currentPage-variabelen for å begrense antall Pokémon som hentes på én gang, 
// slik at nettsiden laster raskere.
// For hver Pokémon som hentes, henter den detaljene for den enkelte Pokémon fra API-en og organiserer dem i en liste.
// Til slutt sorterer den Pokémon-listen etter Pokémonenes ID-er for å vise dem i en bestemt rekkefølge på nettsiden.
// Dataformatet for Pokémon-informasjonen er i JSON-format.

const fetchPokemonDetails = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon data");
  }
  return await response.json();
};

const fetchPokemonOnFrontPage = async (currentPage) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(currentPage - 1) * 9}&limit=9`);
    const data = await response.json();
    const pokemonDetails = await Promise.all(data.results.map(async (item) => {
      return await fetchPokemonDetails(item.url);
    }));
    return pokemonDetails.sort((a, b) => a.id - b.id);
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    throw error;
  }
};

export default fetchPokemonOnFrontPage;
