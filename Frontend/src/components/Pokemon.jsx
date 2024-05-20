//Pokemon.jsx

// Denne komponenten er ansvarlig for å vise detaljert informasjon om en Pokémon basert på navnet som er angitt i URL-parameteren. 
// Når komponenten først lastes eller når navnet på Pokémon endres i URL-en, blir en HTTP-forespørsel sendt til 
// PokeAPI for å hente data om den aktuelle Pokémonen. Informasjonen inkluderer navn, bilde, typer, statistikk og egenskaper.
// Komponenten bruker også useEffect-kroken til å hente beskrivelser for hver av Pokémonens egenskaper fra sine 
// respektive API-endepunkter. Disse beskrivelsene blir deretter vist sammen med egenskapsnavnene.
// For å forbedre brukeropplevelsen, viser komponenten en indikator for lasting mens dataene hentes fra API-en. 
// Hvis det oppstår en feil under datahenting, vil en feilmelding bli logget til konsollen. Når alle dataene er hentet og klar til
//  bruk, renderes Pokémon-detaljene på nettsiden. Dette inkluderer navn, bilde, typer, statistikk og egenskaper, presentert på 
// en strukturert måte som gjør det enkelt for brukeren å forstå og navigere.

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PokemonLoader from './PokemonLoader';

function Pokemon() {
  const { name } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => response.json())
      .then(data => {
        setPokemonData(data);
      })
      .catch(error => {
        console.error('Error fetching pokemon data:', error);
        setLoading(true); // Sett lasting til true ved feil
      })
      .finally(() => {
        setLoading(false); // Sett lasting til false uansett utfall
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

  if (loading) {
    return <PokemonLoader />;
  }
  
  if (!pokemonData) {
    return <div>No data is available.</div>;
  }

  return (
    <main className="pokemon-details">
      <article>
        <section className="pokemon-info">
          <div className="pokemon-name">
            <h2>{pokemonData.name.toUpperCase()}</h2>
          </div>
          <div className={`pokemon-image ${pokemonData.types[0].type.name}`}>
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
                <li key={index} className={type.type.name}>
                  <Link to={`/Type/${type.type.name}`}>{/* Endre ruten til Type/type-navn */}
                    <img
                      className="type-logo"
                      src={`/src/assets/TypeLogo/${type.type.name}.png`}
                      alt={type.type.name}
                    />
                    {type.type.name}
                  </Link>
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
