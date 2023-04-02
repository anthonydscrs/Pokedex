function Navbar({ count, setCount, pokemonListLength }) {
    const handleClickNext = () => {
      setCount(count + 1)
    };
    const handleClickPrevious = () => {
      setCount(count - 1)
    };
  
    return (<nav>
      {count > 0 ? <button onClick={handleClickPrevious}>Previous</button> : null}
      {count < pokemonListLength - 1 ? <button onClick={handleClickNext}>Next</button> : null}
    </nav>)
  }
  
  export default Navbar