// Type.jsx

// Denne komponenten brukes til å vise Pokémon av en bestemt type, basert på type-navnet som er gitt
// som en parameter i URL-en (typeName). Den bruker React Hooks som useState og useEffect for å håndtere 
// tilstanden til komponenten og for å gjøre asynkrone kall til en API-funksjon som henter Pokémon av samme type.
// Når dataene lastes inn, vises en animert "loading" indikator (PokemonLoader). Deretter vises en overskrift med 
// navnet på typen, etterfulgt av en seksjon som inneholder kort for hver Pokémon av den gitte typen. Hvert kort 
// viser Pokémon-navn, bilde og Pokédex-nummer, og er lenket til detaljvisningen av den tilsvarende Pokémonen.
// Denne komponenten bruker også useNavigate-kroken (Hook) fra React-router for å navigere til detaljvisningen av en 
// Pokémon når brukeren klikker på et kort.

import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import PokemonLoader from './PokemonLoader';
import fetchPokemonOfType from './API_SameType';

const Type = () => {
    const { typeName } = useParams();
    const [pokemonOfType, setPokemonOfType] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resolvedPokemons = await fetchPokemonOfType(typeName);
                setPokemonOfType(resolvedPokemons);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [typeName]);

    const handleClick = (pokemonName) => {
        navigate(`/pokemon/${pokemonName}`);
    };

    const imagePath = `/src/assets/TypeLogo/${typeName}.png`;

    return (
        <main>
            {loading && <PokemonLoader />}
            <section className="SameType-container">
                <img src={imagePath} alt={typeName} />
                <h2 className="SameType-Tittle">{typeName.toUpperCase()}</h2>
            </section>
            <section className="SameType-section">
                {!loading && pokemonOfType.map((pokemon) => (
                    <article className={`SameType-face ${pokemon.type.toLowerCase()}`} key={pokemon.id}>
                        <Link to={`/pokemon/${pokemon.name}`} onClick={() => handleClick(pokemon.name)}>
                            <figure className="SameType-img">
                                <img
                                    src={pokemon.imageUrl}
                                />
                            </figure>
                        </Link>
                        <p className="SameType-name">{pokemon.name}</p>
                        <p className="SameType-item-nr">#{pokemon.id}</p>
                    </article>
                ))}
            </section>
        </main>
    );
};

export default Type;
