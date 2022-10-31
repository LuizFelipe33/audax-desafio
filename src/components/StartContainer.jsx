import React from 'react'
import AppBar from './AppBar'
import ContainerImg from './ContainerImg'
import ContainerText from './ContainerText'

//Style
import '../styles/components/startContainer.css'
import Form from './Form'

const StartContainer = () => {
    /*Container que agrega alguns components*/
    return (
      <div className='main'>
          <AppBar/>
          <ContainerText/>
          <ContainerImg/>
          <Form/>
      </div>
    )
  }
  
  export default StartContainer