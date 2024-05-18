// SearchResult.jsx

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SearchResults = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const { q } = useParams();

    useEffect(() => {
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
                }
            };

            fetchData();
        }
    }, [q]);

    return (
        <section>
            {notFound && q ? (
                <h2>No results found for {q}</h2>
            ) : (
                <>
                    <h2>Results for: {q}</h2>
                    <ul>
                        {searchResults.map((pokemon) => (
                            <li key={pokemon.id}>
                                <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </section>
    );
};

export default SearchResults;