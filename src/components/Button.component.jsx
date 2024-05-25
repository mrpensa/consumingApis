import React, { useState } from 'react';

export function ButtonEnvironment({ name }) {
  const [pokemonData, setPokemonData] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 

  const status = () => {
    setIsLoading(true); // 
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon data'); 
        }
        return response.json(); 
      })
      .then(data => {
        setPokemonData(data); 
        setIsLoading(false); 
      })
      .catch(error => {
        setError(error); 
        setIsLoading(false); 
      });
  };

  return (
    <div>
      <button onClick={status}>{name}</button>
      <p style={{ color: 'white' }}>
        {isLoading ? "Loading..." : error ? `Error: ${error.message}` : pokemonData ? `Name: ${pokemonData.name}, Weight: ${pokemonData.weight}, Height: ${pokemonData.height}` : ""}
      </p>
    </div>
  );
}
