import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([])

  const makeCall = async () => {
    try {
      const results = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      setPokemon(results.data.results)
      console.log(results.data.results)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    makeCall()
  },[])



  return (
    <div className="App">
      {
      pokemon.map((item) => (
        <h1>{item.name}</h1>
      ))
      }
    </div>
  );
}

export default App;
