import './App.css'
import Pokedex from './components/pokedex'
import Search from './components/search'
import PokemonList from './components/pokemonlist'

function App() {
  return (
    <div className='pokedex-wrapper'>
     <h1>Pokedex</h1>
      <Search/>
     <PokemonList/>

    </div>
  )
}

export default App
