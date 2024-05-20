// App.jsx

// Koden er en React-applikasjon som viser Pokémon-data på nettsiden. 
// Ved hjelp av useState og useEffect håndterer koden tilstander og effektiv datahenting fra API-et basert på gjeldende side (currentPage). 
// Den bruker også komponenten Routing for å presentere dataene, inkludert Pokémon-data, Pokémon-typer, og lastingsstatus. 


// Importering: Først importerer vi noen nødvendige deler fra React og våre egne filer.
import { useState, useEffect } from "react";
import fetchPokemonOnFrontPage from "./components/API_PokeCard";
import fetchTypesOnFrontPage from "./components/API_TypeCard";
import Routing from "./components/Routing";

// Vi bruker useState-funksjonen til å lage forskjellige tilstander for nettsiden vår
const App = () => {
  const [pokeData, setPokeData] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

// bruker useEffect-funksjonen til å kjøre kode når noe endres, for eksempel når currentPage endres. 
// Denne koden henter data fra en API (API_PokeCard.jsx) & (API_TypeCard.jsx).
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const PokemonDataFromAPI = await fetchPokemonOnFrontPage(currentPage);
        const TypesDataFromAPI = await fetchTypesOnFrontPage();
        setPokeData(PokemonDataFromAPI);
        setPokemonTypes(TypesDataFromAPI);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

// Inne i useEffect-funksjonen lager vi en funksjon som henter data fra API-en. Vi oppdaterer tilstanden med den hentede informasjonen.
    fetchData();
  }, [currentPage]);

// Rendering: Til slutt, vi viser nettsiden vår ved å bruke Routing-komponenten og sender med dataene vi har hentet som egenskaper.
  return (
    <Routing
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      pokeData={pokeData}
      loading={loading}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      pokemonTypes={pokemonTypes}
    />
  );
};

export default App;
