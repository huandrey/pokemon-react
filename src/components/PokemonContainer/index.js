import React, { useEffect } from 'react';

import { Container, Main, PagesControl } from './styles';
import { PokemonItem } from '../PokemonItem';

import { ButtonNext } from '../ButtonNext';
import { ButtonBack } from '../ButtonBack';
import { usePokemon } from '../../hooks/usePokemon';


export const PokemonContainer = () => {

  const { urlLast, loadPokemons, pokemonList, urlNext } = usePokemon();
  
  useEffect(() => {
    loadPokemons();
  }, [])

  return (
    <>
      <Container>
        {/* <form>
          <input type="text" onChange={(e) => findPokemon(e.target.value)}></input>
          <button onClick={(e) => findPokemon(e, pokemonName)}>buscar</button>
        </form> */}
        <Main>
          {pokemonList.map(pokemon => (
            <PokemonItem key={pokemon.url} name={pokemon.name} />
          ))}
        </Main>

      <PagesControl>
        <ButtonBack url={urlLast}/>
        <ButtonNext url={urlNext}/>
      </PagesControl>
      
      </Container>

    </>
  )
}