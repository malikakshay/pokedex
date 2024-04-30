import './App.css'
// import Pokedex from './components/pokedex'
import Search from './components/search'
import PokemonList from './components/pokemonlist'
import CustomRoutes from './customroutes'

function App() {
  return (
    <div className='pokedex-wrapper'>
     <h1>Pokedex</h1>
     <CustomRoutes />
      <Search/>
     <PokemonList/>

    </div>
  )
}

export default App
