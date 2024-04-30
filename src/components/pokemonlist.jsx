import { useEffect, useState,  } from 'react'
import axios from 'axios';
import Pokemon from './pokemon';

function PokemonList(){

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const POKEDEX_URL = 'https://pokeapi.co/api/v2/pokemon';
     
    async function downloadPokemon(){
        const response = await axios.get(POKEDEX_URL);
        const pokemonResults = response.data.results;

        console.log(response.data);

        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonResultPromise);

        console.log(pokemonData);

        const pokeListResult = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return {
                id: pokemon.id,
               name: pokemon.name,
               image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default :pokemon.sprites,
               types: pokemon.types  
            }    
        });
        console.log(pokeListResult);
        setPokemonList(pokeListResult);
        setIsLoading(false)

    }
    useEffect(() => {
        downloadPokemon();
    }, []);




    return(
          <div className='pokemon-list-wrapper'>
          <div>Pokemon List</div>
          {(isLoading) ? 'Loading....' :
          pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} /> )
          }
          </div>
    ) 
}

export default PokemonList;