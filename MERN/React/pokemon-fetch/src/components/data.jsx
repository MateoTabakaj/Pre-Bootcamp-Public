import React, { useState, useEffect } from "react";
import axios from 'axios';

function Pokemon() {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(response => {
                const pokemonNames = response.data.results.map(pokemon => pokemon.name);
                setPokemonData(pokemonNames);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <ol>
            {pokemonData && pokemonData.map(pokemon => (
                <li key={pokemon}>{pokemon}</li>
            ))}
        </ol>
    );
}

export default Pokemon;