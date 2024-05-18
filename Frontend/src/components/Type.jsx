// Type.jsx

//import { useState, useEffect } from 'react';
//import { useParams, useHistory } from 'react-router-dom';

const Type = () => {
    // Denne delen av koden vil inneholde funksjonaliteten for å vise informasjon om pokémoner av den valgte typen.
    // Dette vil inkludere datafetching for å hente informasjon om pokémoner av typen 'typeName'.
    // Deretter vil det vise en liste over disse pokémonene, samt tillate brukere å klikke på en pokémon for å se detaljer om den.
    // Når den senere funksjonaliteten er implementert, vil denne komponenten vise bildet og navnet til den valgte pokemonstypen,
    // og deretter liste opp alle pokemon som har samme type som den valgte typen.
    // Det vil også tillate brukere å klikke på en pokemon for å navigere til detaljsiden for den valgte pokemonen.
    return (

        <main>
            <section className="title-container">
                {/*</section>Her skal det ligge bilde og navnet til den valgte pokemonstype*/}
            </section>
            <section className="PokeWithSameType-section">
                {/*Her listes opp alle pokemon som har samme type som den valgte typen*/}
           </section>
        </main>
    );
};

export default Type;
