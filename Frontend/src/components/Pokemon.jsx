// Pokemon.jsx

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Pokemon() {
  const { name } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => {
        setPokemonData(data);
      })
      .catch(error => {
        console.error('Error fetching pokemon data:', error);
      });
  }, [name]);

  const fetchAbilityDescription = async (ability) => {
    const response = await fetch(ability.ability.url);
    const data = await response.json();
    return data.effect_entries.find(entry => entry.language.name === 'en').effect;
  };

  useEffect(() => {
    if (pokemonData) {
      const fetchAbilities = async () => {
        const abilitiesWithDescription = await Promise.all(
          pokemonData.abilities.map(async ability => {
            const description = await fetchAbilityDescription(ability);
            return { ...ability, description };
          })
        );
        setPokemonData(prevState => ({
          ...prevState,
          abilities: abilitiesWithDescription
        }));
      };
      fetchAbilities();
    }
  }, [pokemonData]);

  if (!pokemonData) {
    return <div>Waiting for data.</div>;
  }

  return (
    <main className="pokemon-details">
      <article>
        <section className="pokemon-info">
          <div className="pokemon-name">
            <h2>{pokemonData.name.toUpperCase()}</h2>
          </div>
          <div className="pokemon-image">
            <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          </div>
        </section>
      </article>
      <article>
        <section className="pokemon-types-and-stats">
          <div className="pokemon-types">
            <h3>TYPES</h3>
            <ul className="types-data">
              {pokemonData.types.map((type, index) => (
                <li key={index}>
                  {type.type.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="pokemon-stats">
            <h3>STATS</h3>
            <ul className="pokemon-stats-data">
              {pokemonData.stats.map((stat, index) => (
                <li key={index}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
      <article className="pokemon-abilities">
        <h3>ABILITIES</h3>
        <ul>
          {pokemonData.abilities.map((ability, index) => (
            <li key={index}>
              <p>{ability.ability.name}</p>
              <p className="ability-description">{ability.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}

export default Pokemon;
