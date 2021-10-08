import React from 'react';
import styled from '@emotion/styled'

const Button = styled.button`
  color: turquoise;
  background-color: aqua;
`

const H1 = styled.h1`
  color: red
`

const Home = () => {

  const click = () =>{
    console.log('click')
  }
  return (
    <div>
      <H1>This is lightgreen.</H1>
      <Button 
        onClick={()=> click()}
      >
        Presiona me!
      </Button>
    </div>
  )
}

export default Home
