// Routing.jsx

// Koden definerer en rutingkomponent ved hjelp av react-router-dom, og organiserer ulike ruter for å håndtere navigasjon på nettsiden. 
// Hver rute er koblet til en spesifikk komponent som skal vises når ruten treffes. 
// Routing-komponenten tar imot props som searchTerm, setSearchTerm, pokeData, loading, currentPage, setCurrentPage, og pokemonTypes, 
// og sender dem videre til de tilhørende komponentene. 
// Den sørger også for at Header-komponenten alltid vises øverst på siden for en konsistent navigasjonsopplevelse.

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "./Header";
import Forsiden from "./Home";
import Teams from "./Teams";
import Type from "./Type";
import Pokemon from "./Pokemon";
import SearchResults from "./SearchResults";

const Routing = ({ searchTerm, setSearchTerm, pokeData, loading, currentPage, setCurrentPage, pokemonTypes }) => {
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
                  loading={loading}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
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

Routing.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  pokeData: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  pokemonTypes: PropTypes.array.isRequired
};

export default Routing;
