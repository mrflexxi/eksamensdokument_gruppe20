import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SearchResults = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const { q } = useParams();

    useEffect(() => {
        // Her skal vi legge til kode for å hente søkeresultater basert på 'q' parameteren.
        // Denne useEffect vil bli kalt hver gang 'q' parameteren endres, noe som betyr at vi henter nye søkeresultater når brukeren søker etter forskjellige navn.
    }, [q]);

    return (
        <section>
            {/* Placeholder for visning av søkeresultater */}
        </section>
    );
};

export default SearchResults;