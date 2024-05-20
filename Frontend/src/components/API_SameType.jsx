// API_SameType.jsx

// Koden definerer en funksjon kalt fetchPokemonsWithSameType som er ansvarlig for å hente Pokémoner med samme type fra PokeAPI. 
// Funksjonen tar imot typeName som parameter, som angir hvilken type Pokémoner som skal hentes.

// Først gjør den en forespørsel til API-et for å hente data om den angitte typen ved å bruke typeName i URL-en.
// Hvis responsen er vellykket, henter den dataene som JSON.
// Deretter henter den detaljene for hver Pokémon i listen ved å gjøre en annen forespørsel for hver Pokémon-URL i listen.
// For hver Pokémon hentes ID, navn, bilde-URL og type, og legges til i en ny liste.
// Til slutt returnerer funksjonen den listen med Pokémon-objekter.
// Hvis det oppstår en feil under henting av dataene, logges feilen til konsollen og kastes videre.

const fetchPokemonsWithSameType = async (typeName) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        const pokemons = data.pokemon.slice(0, 20).map(async (pokemonData) => {
            const pokemonResponse = await fetch(pokemonData.pokemon.url);
            if (!pokemonResponse.ok) {
                throw new Error("Failed to fetch Pokémon data");
            }
            const pokemon = await pokemonResponse.json();
            return {
                id: pokemon.id,
                name: pokemon.name,
                imageUrl: pokemon.sprites.front_default,
                type: pokemon.types.map(type => type.type.name).join(', '),
            };
        });
        const resolvedPokemons = await Promise.all(pokemons);
        return resolvedPokemons;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export default fetchPokemonsWithSameType;