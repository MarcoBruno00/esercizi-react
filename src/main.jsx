import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import DoSum from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App() {
  return(
    <>
    <DoSum a={10} b={10} />
    </>
  )
}