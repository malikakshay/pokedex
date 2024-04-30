import PokemonList from "./pokemonlist";
import Search from "./search";

function Pokedex(){
  
    return(
        <div>
        <h1>Pokedex</h1>
        <Search />
        <PokemonList />
        </div>
    )
}

export default Pokedex;