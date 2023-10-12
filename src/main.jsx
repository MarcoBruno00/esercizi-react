import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Welcome from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App(){
  return(
    <>
      <Welcome name = "john" age={23} />    
    </>
  )
}