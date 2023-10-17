import { useState } from 'react'
import './App.css'
import { Colors } from './counter'




function App() {
  return(
     <>
      <Colors items={[
        {id:1 , name :"red" } , 
        {id:2 , name :"blue" } ,
        {id:3 , name :"yellow" },
        {id:4 , name :"purple" }
        ]} />
     </>
  )
}
export default App
