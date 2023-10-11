import { useState } from 'react'
import './App.css'

function Welcome({name = "nome mancante"}) {
 

  return (
    <p>welcome , {name}</p>
  )
}

export default Welcome
