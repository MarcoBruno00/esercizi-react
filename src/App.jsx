import { useState } from 'react'
import './App.css'


function AlertClock() {
  function handleClock() {
    
    const clock = new Date()

      alert(`it is the time ${clock.toLocaleTimeString()}`)

  }



  return(
    <button onClick={handleClock}>time!</button>
  )
}
export default AlertClock
