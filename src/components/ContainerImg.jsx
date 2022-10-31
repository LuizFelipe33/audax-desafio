import React from 'react'
//Style
import '../styles/components/containerImg.css'
import not2 from '../assets/not2.png'
import not3 from '../assets/not3.png'

const ContainerImg = () => {
    return (
      /*Containers com imagens*/
      <section>
          <div className='containerText2'>
            <h1>Conheça</h1>
            <p>Ema, também conhecida como nandu, nhandu, guaripé e xuri,
              é uma ave da família Rheidae nativa da América do Sul.
              Apesar de possuir grandes asas, é uma ave não voadora.</p>         
          </div>   
          <div className='container-main'>
              <div className='containers'>
                  <h3>99% dos dados adicionados sem fonte não possuem veracidade.</h3>
                  <p>Inclusive esse texto aqui, que não possui fundo científico algum
                  e é 100% errado. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <img className='img-not2' src={not2} />
              </div>
              <div className='containers'>
                  <h3>Aumento de 24% em vendas</h3>
                  <p>Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <img className='img-not2' src={not3} />
              </div>
          </div>       
      </section>
    )
  }
  
  export default ContainerImg