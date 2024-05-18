// API_PokeCard.jsx

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