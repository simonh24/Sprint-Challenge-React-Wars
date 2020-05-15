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
        setCharArr(res.data.results)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* {charArr.map(char => <Character name={char.name} height={char.height} mass={char.mass} gender={char.gender} />)} */}
      {charArr.map(el => <Character key={el.name} name={el.name} height={el.height} mass={el.mass} gender={el.gender} />)}
      {/* <Character /> line to {charArr.map(char => <Character char={char} />)} */}
    </div>
  )
}


export default App;