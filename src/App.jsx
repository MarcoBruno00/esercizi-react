import "./App.css";
import React, { useState } from "react";
import { Clock } from "./Clock";
import { LanguageContext } from "./LanguageContext";

function App() {
  const [language, setLanguage] = useState("it");

  function handleSetLanguage(event) {
    setLanguage(event.target.value);
  }

  //togliendo il provider avremo un messaggio nella lingua che abbiamo impostato di default che in questo caso sara l 'italiano
  return (
    <div>
      <select value={language} onChange={handleSetLanguage}>
        <option value="it">IT</option>
        <option value="en">EN</option>
      </select>
      
        <Clock />
      
    </div>
  );
}

export default App;