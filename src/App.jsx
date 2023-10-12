import { useState } from 'react'
import './App.css'


function Welcome({name , age}) {
  return(
      <div>
          <p>welcome, {name}</p>
          {age ? <p>your age is {age}</p> : <p>non ha eta</p>}
      </div>
  )
}
export default Welcome
