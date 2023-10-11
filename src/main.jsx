import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Welcome from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App() {
  return(
    <>
    <Welcome />
    {/* se leviamo la prop name non viene stampato il nome ma solo "Welcome,"" */}
    {/*se non aggiungo il nome marco viene renderizzato il nome messo nella prop*/}
    </>
  )
}