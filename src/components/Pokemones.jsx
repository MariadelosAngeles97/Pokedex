import '../styles/Pokemones.css'
import usePokemones from '../hooks/usePokemones'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from './Loader'

function Pokemon({id, name, img}){
  return(
    <div className='pokemon-card'>
      <img src={img} alt={name} className='pokemon-img'/>
      <p className='pokemon-title'>
        <span>#{id}</span>
        <span>{name}</span>
      </p>
    </div>
  )
}

function Pokemones() {
  const { pokemones, masPokemones, verMas}= usePokemones()
  return (
    <InfiniteScroll
    dataLength={pokemones.length}
    next={masPokemones}
    hasMore={verMas} 
    loader={<Loader/>}
    endMessage={
      <h3 className='title' style={{gridColumn: '1/6'}}>Lo siento no hay mas pokemones por mostrar</h3>
    }
    className='pokemon-container'>
      {pokemones.map(pokemon => <Pokemon {...pokemon} key={pokemon.id}/> )}
    </InfiniteScroll>
  )
}

export default Pokemones
