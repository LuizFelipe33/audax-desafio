//imports
import React from 'react'
//Style
import '../styles/components/appbar.css'

const AppBar = () => {
    return (
      /*Barra de navegação composta por uma lista*/
      <header >
        <h1 className='titulo'>DATANOW</h1>
          <li className='bar'>
              <ul><a href="#">Início</a></ul>
              <ul><a href="#">Conheça</a></ul>
              <ul><a href="#">Funcionalidades</a></ul>
              <ul><a href="#">Contato</a></ul>
          </li>
      </header>
    )
  }
  
  export default AppBar