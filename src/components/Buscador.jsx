import React from 'react'
import '../styles/Buscador.css'
import { Search } from './Icons'

function Buscador() {
  return (
    <>
      <h3 className='title'>Mas de 800 pokemones, elige tu favorito</h3>
      <section className='container-search'>
        <input type='text' placeholder='Encuentra tu Pokemon' className='input-search'></input>
        <button className='btn-search'>
          <Search/>
          Buscar pokemon
        </button>
      </section>
    </>
  )
}

export default Buscador
