// API_TypeCard.jsx

// Denne funksjonen henter informasjon om Pokémon-typer som skal vises på forsiden av nettsiden.
// Den gjør en enkelt forespørsel til API-en for å få en liste over Pokémon-typer.
// For hver Pokémon-type i listen, henter den detaljene for den enkelte typen fra API-en.
// Til slutt organiserer den Pokémon-typeinformasjonen i en liste og returnerer den for å vises på nettsiden.
// Dataformatet for Pokémon-typeinformasjonen er i JSON-format.
// currentPage-variabelen bestemmer hvilken side av dataene som skal hentes fra API-et.

const fetchTypesOnFrontPage = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/type");
    const data = await response.json();
    const types = await Promise.all(data.results.map(async (type) => {
        const typeResponse = await fetch(type.url);
        const typeData = await typeResponse.json();
        return {
          id: typeData.id,
          name: typeData.name,
        };
      })
    );
    return types;
  } catch (error) {
    console.error("Error fetching Pokemon types:", error);
    throw error;
  }
};

export default fetchTypesOnFrontPage;
