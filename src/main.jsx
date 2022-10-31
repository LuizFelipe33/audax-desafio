//Principal classe do projeto onde chama todos os components 
import React from 'react'
import ReactDOM from 'react-dom/client'
import StartContainer from './components/StartContainer'
//Style
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StartContainer/>
  </React.StrictMode>
)
