// Routing.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Forsiden from "./Home";
import Teams from "./Teams";
import Type from "./Type";
import Pokemon from "./Pokemon";
import SearchResults from "./SearchResults";

const Routing = ({ searchTerm, setSearchTerm, pokeData, pokemonTypes }) => {
  return (
    <Router>
      <main className="container">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <section>
          <Routes>
            <Route
              path="/"
              element={
                <Forsiden
                  pokeData={pokeData}
                  pokemonTypes={pokemonTypes}
                />
              }
            />
            <Route path="/teams" element={<Teams />} />
            <Route path="/type/:typeName" element={<Type />} />
            <Route path="/pokemon/:name" element={<Pokemon />} />
            <Route path="/search/:q" element={<SearchResults />} />
          </Routes>
        </section>
      </main>
    </Router>
  );
};

export default Routing;