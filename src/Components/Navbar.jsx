function Navbar({ count, setCount, pokemonList }) {

    return (<nav>
      {pokemonList.map((pokemon, index) =>
        <button key={pokemon.name} onClick={() => setCount(index)}>{pokemon.name}</button >
      )}
    </nav >)
  }
  
  
  export default Navbar