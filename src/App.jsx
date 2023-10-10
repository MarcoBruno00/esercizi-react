import { useState } from 'react'
import './App.css'

function App() {


  function sayHello (name){
    return <h1>Hello, {name}!</h1>
}

  return (
    <>
      {sayHello}
      //darà come risultato solo "Hello, !" se non passo la variabile name//
    </>
  )
}

export default App
