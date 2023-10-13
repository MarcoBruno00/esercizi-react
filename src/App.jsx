import { useState } from 'react'
import './App.css'
import AlertClock from './alertClock'



function App() {
  function handleClock() {
    
    const clock = new Date()

      alert(`it is the time ${clock.toLocaleTimeString()}`)

  }

  return(
    <>
      <AlertClock event = {handleClock} />
    </>
  )
}


export default App