import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Pokemon() {
  const { name } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    // Her skal vi legge til kode for å hente data om den valgte Pokémonen ved hjelp av 'name' parameteren.
    // Denne useEffect vil bli kalt hver gang 'name' parameteren endres, noe som betyr at vi henter nye data når brukeren navigerer til en annen Pokémon.
  }, [name]);

  const fetchAbilityDescription = async (ability) => {
    // Her skal vi legge til kode for å hente beskrivelsen av en spesifikk evne (ability) til en Pokémon.
    // Denne funksjonen vil bli brukt til å hente og legge til beskrivelser for hver av Pokémonens evner.
  };

  useEffect(() => {
    // Her skal vi legge til kode for å utføre ulike oppgaver når pokemonData endres.
    // For eksempel kan vi bruke dette til å hente beskrivelser for hver av Pokémonens evner etter at hoveddataene er hentet.
  }, [pokemonData]);

  return (
    <main className="pokemon-details">
      <article>
        <h2>{pokemonData.name.toUpperCase()}</h2>
        <section className="pokemon-image">
          {/*Bilde av pokemon*/}
        </section>
      </article>
      <article>
        <section className="pokemon-types-and-stats">
          <div className="pokemon-types">
            <h3>TYPES</h3>
            <ul className="types-data">
              {/* Placeholder for visning av pokémontyper */}
            </ul>
          </div>
          <div className="pokemon-stats">
            <h3>STATS</h3>
            <ul>
              {/* Placeholder for visning av pokémonstatistikker */}
            </ul>
          </div>
        </section>
      </article>
      <article className="pokemon-abilities">
        <h3>ABILITIES</h3>
        <ul>
          {/* Placeholder for visning av pokémon-evner */}
        </ul>
      </article>
    </main>
  );
}

export default Pokemon;
