// TypeCard.jsx

import { Link } from "react-router-dom";

const TypesSection = ({ pokemonTypes }) => {
    if (!Array.isArray(pokemonTypes)) {
        return null;
    }

    return (
        <main className="type-container">
            <h2 className="types-Tittle">TYPES</h2>
            <section className="type-grid">
                {pokemonTypes.map((type, index) => (
                    <article key={index} className={`type-box ${type.name}`}>
                        <Link to={`/type/${type.name}`} className="type-link">
                            <div className="type-content">
                                <span className="type-name">{type.name}</span>
                            </div>
                        </Link>
                    </article>
                ))}
            </section>
        </main>
    );
};

export default TypesSection;