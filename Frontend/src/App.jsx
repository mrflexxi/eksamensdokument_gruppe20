// App.jsx

import { useState } from "react";
import fetchPokemonOnFrontPage from "./components/API_PokeCard";
import fetchTypesOnFrontPage from "./components/API_TypeCard";
import Routing from "./components/Routing";

const App = () => {
  const [pokeData, setPokeData] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const PokemonDataFromAPI = await fetchPokemonOnFrontPage();
      const TypesDataFromAPI = await fetchTypesOnFrontPage();
      setPokeData(PokemonDataFromAPI);
      setPokemonTypes(TypesDataFromAPI);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();

  return (
    <Routing
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      pokeData={pokeData}
      pokemonTypes={pokemonTypes}
    />
  );
};

export default App;