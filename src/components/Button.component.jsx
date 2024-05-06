import React, { useState } from 'react';

export function ButtonEnvironment({ name }) {
  // Definición de estados para manejar los datos del Pokémon, el estado de carga y los errores
  const [pokemonData, setPokemonData] = useState(null); // Almacena los datos del Pokémon
  const [isLoading, setIsLoading] = useState(false); // Indica si la solicitud está en progreso
  const [error, setError] = useState(null); // Almacena cualquier error que ocurra durante la solicitud

  // Función que se ejecuta al hacer clic en el botón
  const status = () => {
    setIsLoading(true); // Establece isLoading en true para indicar que la solicitud está en progreso
    // Realiza la solicitud a la API de Pokémon para obtener datos de Pikachu
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`)
      .then(response => {
        // Verifica si la respuesta de la solicitud es exitosa
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon data'); // Lanza un error si la solicitud falla
        }
        return response.json(); // Convierte la respuesta a formato JSON
      })
      .then(data => {
        setPokemonData(data); // Actualiza el estado pokemonData con los datos del Pokémon
        setIsLoading(false); // Establece isLoading en false para indicar que la solicitud ha terminado
      })
      .catch(error => {
        setError(error); // Captura cualquier error que ocurra durante la solicitud y lo almacena en el estado error
        setIsLoading(false); // Establece isLoading en false para indicar que la solicitud ha terminado
      });
  };

  // Renderización del componente
  return (
    <div>
      {/* Botón que al hacer clic ejecuta la función status */}
      <button onClick={status}>{name}</button>
      {/* Párrafo para mostrar el estado actual de la solicitud */}
      <p style={{ color: 'white' }}>
        {/* Selecciona el texto a mostrar según el estado de isLoading, error y pokemonData */}
        {isLoading ? "Loading..." : error ? `Error: ${error.message}` : pokemonData ? `Name: ${pokemonData.name}, Weight: ${pokemonData.weight}, Height: ${pokemonData.height}` : "Click the button to load Pokémon data"}
      </p>
    </div>
  );
}
