import React from 'react'
import { Container } from './styles'

type DefaultProps ={
  children: React.ReactNode;
}

const Default = ({children}: DefaultProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Default

