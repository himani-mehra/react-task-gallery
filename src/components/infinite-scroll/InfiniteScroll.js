import React, { useState, useEffect } from 'react';
import './InfiniteScroll.css';

const InfiniteScroll = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  // Fetch data on mount & offset change
  useEffect(() => {
    const fetchPokemon = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const data = await response.json();

        const detailedData = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );

        setPokemonList((prevList) => [...prevList, ...detailedData]);
      } catch (error) {
        console.log("Error fetching Pokémon");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemon();
  }, [offset]);

  // Scroll event to detect bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.offsetHeight;

      if (scrollTop + windowHeight + 50 >= fullHeight && !isLoading) {
        setOffset((prev) => prev + limit);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  return (
    <div className="product-list-container">
      <h2 className='text-3xl font-semibold text-center mb-4'>Pokémon List</h2>
      <div className="product-list">
        {pokemonList.length === 0 ? (
          <p>No Pokémon to show.</p>
        ) : (
          pokemonList.map((pokemon) => (
            <div className="product-row" key={pokemon.id}>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="product-image"
              />
              <div className="product-info">
                <h3>{pokemon.name}</h3>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>Type: {pokemon.types.map(t => t.type.name).join(', ')}</p>
              </div>
            </div>
          ))
        )}
      </div>
      {isLoading && <p className="loading">Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;