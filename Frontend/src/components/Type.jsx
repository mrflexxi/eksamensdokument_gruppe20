// Type.jsx

import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import fetchPokemonOfType from './API_SameType';

const Type = () => {
    const { typeName } = useParams();
    const [pokemonOfType, setPokemonOfType] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resolvedPokemons = await fetchPokemonOfType(typeName);
                setPokemonOfType(resolvedPokemons);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [typeName]);

    const handleClick = (pokemonName) => {
        navigate(`/pokemon/${pokemonName}`);
    };

    return (
        <main>
            <section className="SameType-container">
                <h2 className="SameType-Tittle">{typeName.toUpperCase()}</h2>
            </section>
            <section className="SameType-section">
                {pokemonOfType.map((pokemon) => (
                    <article className="SameType-face" key={pokemon.id}>
                        <Link to={`/pokemon/${pokemon.name}`} onClick={() => handleClick(pokemon.name)}>
                            <p className="SameType-name">{pokemon.name}</p>
                        </Link>
                    </article>
                ))}
            </section>
        </main>
    );
};

export default Type;