import React from 'react'
import AppBar from './AppBar'
import ContainerImg from './ContainerImg'
import ContainerText from './ContainerText'

//Style
import '../styles/components/startContainer.css'

const StartContainer = () => {
    /*Container que agrega alguns components*/
    return (
      <div className='main'>
          <AppBar/>
          <ContainerText/>
          <ContainerImg/>
      </div>
    )
  }
  
  export default StartContainer