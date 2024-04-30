
function Pokemon({ name, image, id }){
    return (
        <div className="pokemon">
          <link href="/pokemon/${id}">
           <div>{name}</div> 
           <div> 
              <img src={image} />
           </div>
           </link>
        </div>
    )
}

export default Pokemon;