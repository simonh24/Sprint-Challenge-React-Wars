// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Character(props) {
    console.log(props);
    const { name, height, mass, gender } = props;
    // const [charName, setCharName] = useState("");
    // const [charHeight, setCharHeight] = useState("");
    // const [charMass, setCharMass] = useState("");
    // const [charGender, setCharGender] = useState("");
    // const [filmCount, setFilmCount] = useState(0);


    //   useEffect(() => {
    //     axios.get("https://swapi.py4e.com/api/people/71")
    //       .then(res => {
    //         setCharName(res.data.name);
    //         setCharHeight(res.data.height);
    //         setCharMass(res.data.mass);
    //         setCharGender(res.data.gender);
    //       })}, []);

    const StyledDiv = styled.div`
        background-color: rgba(255,255,255,0.2);
        width: 30%;
        display:flex;
        justify-content: center;
        align-items:center;
        flex-direction: column;
        margin: 20px 35%;
    `;
    const StyledP = styled.p`
        color: white;
    `;

    // useEffect(() => {
    //     setCharName(name);
    //     setCharHeight(height);
    //     setCharMass(mass);
    //     setCharGender(gender);
    // }, []);

    return (
        <StyledDiv className="Card">
            <h1>{name}</h1>
            <StyledP>Height: {height}</StyledP>
            <StyledP>Mass: {mass}</StyledP>
            <StyledP>Gender: {gender}</StyledP>
        </StyledDiv>
    );
}