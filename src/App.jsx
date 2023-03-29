import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard.jsx"

function App(props) {
  const [count, setCount] = useState(0)

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

  let pokemon = pokemonList[0];

  return (
    <div className="App">
      <PokemonCard props={pokemon} />
    </div>
  )
}

export default App;
