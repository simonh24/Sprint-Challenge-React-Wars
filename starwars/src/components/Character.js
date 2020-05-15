// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Character(props) {
    const {name, height, mass, gender} = props;
    const [charName, setCharName] = useState("");
    const [charHeight, setCharHeight] = useState("");
    const [charMass, setCharMass] = useState("");
    const [charGender, setCharGender] = useState("");
    // const [filmCount, setFilmCount] = useState(0);

    
//   useEffect(() => {
//     axios.get("https://swapi.py4e.com/api/people/71")
//       .then(res => {
//         setCharName(res.data.name);
//         setCharHeight(res.data.height);
//         setCharMass(res.data.mass);
//         setCharGender(res.data.gender);
//       })}, []);

    setCharName(name);
    setCharHeight(height);
    setCharMass(mass);
    setCharGender(gender);

    return (
        <div className="Card">
            <h1>{charName}</h1>
            <p>Height: {charHeight}</p>
            <p>Mass: {charMass}</p>
            <p>Gender: {charGender}</p>
        </div>
    );
}