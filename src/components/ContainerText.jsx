import React from 'react'

//Style
import '../styles/components/containerText.css'
import not from '../assets/not.png'

const ContainerText = () => {
    return (
      /*Texto e imagem iniciais */
      <section className='flex'>
        <div className='containerText'>
            <h1>Esse texto é uma heading super legal</h1>
            <p>E esse texto aqui acompanha o título. Já que eu preciso falar muito,
              vou falar sobre Emas. Considerada a maior ave do continente americano,
              a ema pode chegar a medir 1,70 m de altura! Impressionante, não é?</p>
              <button>Isso aqui é um CTA</button>       
        </div>    
        <div className='img'>
          <img className='img-not' src={not} />
        </div>                            
      </section>
    )
  }
  
  export default ContainerText