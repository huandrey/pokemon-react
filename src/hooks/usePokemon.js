import { createContext, useState, useContext } from 'react';
import Axios from 'axios';

const PokemonContext = createContext();

export function PokemonProvider({children}) {
  
  const [pokemonList, setPokemonList] = useState([]);
  const [urlLast, setUrlLast] = useState("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20");
  const [urlNext, setUrlNext] = useState("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20");

  const loadPokemons = async (url = null) => {
  
    if (url === null) {
      const response = await Axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20");
      setPokemonList(response.data.results)
      return;
    }

    const response = await Axios.get(url);
    setPokemonList(response.data.results)

    setUrlNext(response.data.next);
    setUrlLast(response.data.previous);
  }
  
  const findPokemon = async (name) => {
    // e.preventDefault();
    
    try {
  
      const pokemon = await Axios.get(`https://pokeapi.co/api/v2/pokemon/`);
  
      const pokemonsFilted = pokemon.data.results.includes(name);

      console.log(pokemonsFilted);

    } catch (e) {
      console.log("pokemon nao existe")
    }

  }

  return (
    <PokemonContext.Provider value={{ urlLast, setPokemonList, pokemonList, loadPokemons, urlNext, findPokemon }}>
      {children}
    </PokemonContext.Provider>
  )
}

export function usePokemon() {
  const context = useContext(PokemonContext);

  return context
}