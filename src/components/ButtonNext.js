import React from 'react';
import { usePokemon } from '../hooks/usePokemon';
import Button from '@material-ui/core/Button';

export const ButtonNext = ({ url }) => {

  const { loadPokemons } = usePokemon();
  
  const nextPage = (url) => {
    loadPokemons(url)
  }
  
  return (
    <Button
      onClick={() => nextPage(url)}
      variant="contained"
      color="primary"
      >
      Próximo
    </Button>
  )
}