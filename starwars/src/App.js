import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Character from "./components/Character"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [charArr, setCharArr] = useState([])

  useEffect(() => {
    axios.get("https://swapi.py4e.com/api/people/")
      .then(res => {
        res.data.results.map(el => setCharArr([...charArr, el]))
      })
      .catch(err => console.log(err))
  },[])
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
{charArr.map(char => <Character name={char.name} height={char.height} mass={char.mass} gender={char.gender} />)}
{/* <Character /> line to {charArr.map(char => <Character char={char} />)} */}
    </div>
  )
}


export default App;