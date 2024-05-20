// SerachResults.css

// SearchResults-komponenten er ansvarlig for å vise søkeresultatene basert på et søkeord som er angitt i URL-parameteren. 
// Ved hjelp av useEffect-kroken henter den Pokémon-data fra PokeAPI basert på søkeordet og viser dem som Pokémon-kort. 
// Hvis ingen resultater blir funnet for søket, vises en passende melding. Hvert Pokémon-kort inneholder bilde, navn, vekt, 
// høyde og typer, og er lenket til detaljsiden for den aktuelle Pokémonen.

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SearchResults = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(true);
    const { q } = useParams();

    useEffect(() => {
        setLoading(true);

        if (q && q.trim() !== "") {
            const fetchData = async () => {
                try {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${q}`);
                    if (response.ok) {
                        const data = await response.json();
                        setSearchResults([data]);
                        setNotFound(false);
                    } else {
                        setSearchResults([]);
                        setNotFound(true);
                    }
                } catch (error) {
                    console.error("Error fetching search results:", error);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }
    }, [q]);

    return (
        <section>
            {loading ? (
                <h2>Loading...</h2>
            ) : notFound && q ? (
                <h2>No results found for {q}</h2>
            ) : (
                <>
                    <h2>Results for: {q}</h2>
                    <section className="ShowAsPokemonCard">
                        {searchResults.map((pokemon) => (
                            <article className={`Search-face ${pokemon.types[0].type.name}`} key={pokemon.id}>
                                <Link to={`/pokemon/${pokemon.name}`} >
                                    <div>
                                        <p className="Search-item-nr">{`#${pokemon.id}`}</p>
                                        <img src={pokemon.sprites.front_default} />
                                        <p className="Search-name">Name: {pokemon.name}</p>
                                        <p className="Search-hight">Weight: {pokemon.weight}</p>
                                        <p className="Search-weight">Height: {pokemon.height}</p>
                                        <p className="Search-type">Type(s): 
                                            {pokemon.types.map((type, index) => (
                                                <span key={index}>{type.type.name}{index !== pokemon.types.length - 1 && ", "}</span>
                                            ))}
                                        </p>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </section>
                </>
            )}
        </section>
    );
};

export default SearchResults;
