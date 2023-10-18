import { useState } from 'react'
import './App.css'
import { Hello } from './hello'
import { Message } from './message'
import { Container } from './container'




function App() {
  return(
     <>
     <Container title={ <Hello />} >
      <Message />
      </Container>
     </>
  )
}
export default App
