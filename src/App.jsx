import { useState } from 'react'
import './App.css'


function Welcome({name , age}) {
  return(
      <div>
          <p>welcome, {name}</p>
          { age<=18 ? <p>your age is {age}</p> : <p>is very young</p>}
      </div>
  )
}
export default Welcome
