import React, { useState, useEffect } from "react";
import axios from 'axios';

function Pokemon() {
    const [pokemonData, setPokemonData] = useState(null);
    const [showList, setShowList] = useState(false);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(response => {
                const pokemonNames = response.data.results.map(pokemon => pokemon.name);
                setPokemonData(pokemonNames);
            })
            .catch(err => console.log(err));
    }, []); 
    const handleClick =()=>{
        setShowList(true);
    }

    return (
        <>
    <button onClick={handleClick}>Show all pokemons </button>
    {showList&&(
        <ol>
            {pokemonData && pokemonData.map(pokemon => (
                <li key={pokemon}>{pokemon}</li>
            ))}
        </ol>)}
        </>
    );
}

export default Pokemon;