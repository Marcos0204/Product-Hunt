import React from 'react';
import styled from '@emotion/styled';

const Heading = styled.h1`
  color: red;
`

const Button = styled.button`
  background-color: salmon;
  color: green;
`

const Home = () => {

  
  return (
    <div>
      <Heading>
        hola
      </Heading>
      <Button
        onClick={()=> console.log('click me!')}
      >
        click
      </Button>
    </div>
  )
}

export default Home
