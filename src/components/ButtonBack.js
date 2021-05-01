import React from 'react';
import { usePokemon } from '../hooks/usePokemon';

import Button from '@material-ui/core/Button';

export const ButtonBack = ({ url }) => {
  const { loadPokemons } = usePokemon();

  const backPage = (url) => {
    loadPokemons(url)
  }
  return (
    <Button
      onClick={() => backPage(url)}
      variant="contained"
      color="primary"
      >
      Anterior
    </Button>  )
}