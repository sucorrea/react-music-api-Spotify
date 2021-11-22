import React from 'react';

import { Container, Input, Label } from './styles';


const SearchBar = () => {
  return (
    <Container>
      <Label>Busque por artista álbuns ou música</Label>
      <Input 
      placeholder='Comece a escrever'
      />
    </Container>
  )
}

export default SearchBar

