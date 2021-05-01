import React from 'react';

import { Card } from './styles.js';

export const PokemonItem = ({ name, url }) => {
  return (
    <Card>{name}</Card>
  )
}