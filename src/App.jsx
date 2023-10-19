import { useState } from 'react'
import './App.css'
import { LanguageContext } from "./LanguageContext";
import { Clock } from './clock'





function App() {
  const [language , setLanguage]= useState("it")

  function handleSetLanguage(event) {
    setLanguage(event.target.value)
  }

  return(
     <>
         <div>
      <select value={language} onChange={handleSetLanguage}>
        <option value="it">IT</option>
        <option value="en">EN</option>
      </select>
      <LanguageContext.Provider value={language}>
        <Clock />
      </LanguageContext.Provider>
    </div>
     </>
  )
}
export default App
