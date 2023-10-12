import { useState } from 'react'
import './App.css'

function Welcome({name , age}) {
 

  return (
    <div>
      <p>welcome , {name}</p>
      <p>your age is {age}</p>
    </div>
  )
}

export default Welcome
