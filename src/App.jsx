import { useState } from 'react'
import './App.css'
import { Colors } from './counter'




function App() {
  return(
     <>
      <Colors items={["red" , "blue" , "yellow" , "purple"]} />
     </>
  )
}
export default App
