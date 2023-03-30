import PropTypes from "prop-types";

const pokemonList = [

  {
  
      name: "bulbasaur",
  
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  
    },
  
    { name: "charmander",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  
    },
  
    { name: "squirtle",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  
    },
  
    { name: "pikachu",
     imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  
    },

  ];

function PokemonCard({props}) {
  const {name, imgSrc} = props;


  return (<figure>
    {pokemonImg === undefined ? <p>???</p> : <img src={pokemonImg} alt={pokemon.name}></img> }
    <figcaption>{pokemon.name}</figcaption>
  </figure>);
}

PokemonCard.PropTypes =
props = PropTypes.shape ( {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
})

export default PokemonCard