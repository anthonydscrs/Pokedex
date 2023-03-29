const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
  },
];

function PokemonCard({props}) {
  const {name, imgSrc} = props;


  return (<figure>
    {pokemonImg === undefined ? <p>???</p> : <img src={pokemonImg} alt={pokemon.name}></img> }
    <figcaption>{pokemon.name}</figcaption>
  </figure>);
}

export default PokemonCard