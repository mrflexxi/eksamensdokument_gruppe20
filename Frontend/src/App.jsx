// App.jsx

import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/Routing";

const App = () => {
  const [pokeData, setPokeData] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);


  return (
    <Router>
      <Routing />
    </Router>
  );
};

export default App;