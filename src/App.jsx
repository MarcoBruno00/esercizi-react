import { useState } from 'react'
import './App.css'


function Welcome({name , age}) {
  return(
      <div>
          <p>welcome, {name}</p>
          { name === "john" && age>=18 && age<=65 && <p>your age is {age}</p>}
      </div>
  )
}
export default Welcome
