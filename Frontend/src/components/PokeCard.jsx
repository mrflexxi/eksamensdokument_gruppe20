// PokeCard.jsx

import { Link } from "react-router-dom";

const MainPokemonsSection = ({ pokemon }) => {
    return (
        <main className="home-PokemonsCard-container">
            <h2 className="Pokemoms-Tittle">MAIN POKEMONS</h2>
            <section className="PokemonsCard">
                {pokemon && pokemon.map((item) => (
                    <article className="PokemonsCard-face" key={item.name}>
                        <Link to={`/pokemon/${item.name}`} className="PokemonsCard-link">
                            <span className="PokemonsCard-details">
                                <p className="PokemonsCard-name">{item.name}</p>
                            </span>
                        </Link>
                    </article>
                ))}
            </section>
        </main>
    );
};

export default MainPokemonsSection;