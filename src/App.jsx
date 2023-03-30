import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard.jsx"


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

    {name: "mew",
    },
  ];

function App(props) {
  let [count, setCount] = useState(0)
  let pokemon = pokemonList[count]

    const handleClickPrevious = () => {
      setCount(count - 1)
    }
    const handleClickNext = () => {
      setCount(count + 1)
    }

  return (
  <div className="App">
  <PokemonCard props={pokemon} />
<button onClick={handleClickPrevious}>Previous</button>
<button onClick={handleClickNext}>Next</button>
 </div>
 )
  }

export default App;
