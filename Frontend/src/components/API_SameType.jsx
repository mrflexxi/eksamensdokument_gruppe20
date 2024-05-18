// API_SameType.jsx

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