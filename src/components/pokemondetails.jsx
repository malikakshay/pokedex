import { useParams } from "react-router-dom"

function PokemonDetails(){
     const {id} = useParams();
     const [pokemon, setPokemon] = useState({})

     async function downloadPokemon(){
        const response =await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        setPokemon({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t) => t.types.name)
        })
     }

     useEffect(() =>{
        downloadPokemon();
     }, [])
    return (
        <div className="pokemon-details-wrapper">
        <div className="pokemon-name">name: {pokemon.name}</div>
        <div className="pokemon-image">src={pokemon.image}</div>
        <div>Height: {pokemon.height}</div>
        <div>weight: {pokemon.weight}</div>
        <div className="pokemon-types">
            {pokemon.types && pokemon.types.map((t) => <div key={t}> {t}</div>)}
        </div>

        </div>
    )
}

export default PokemonDetails;