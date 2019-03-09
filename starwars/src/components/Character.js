import React from 'react';
import './StarWars.css'

export default function Character(props) {
    return (
        <div className="character-card">
        <h3>Name: {props.character.name}</h3>
        <p>Birthdate: {props.character.birth_year}</p>
        <p>Gender: {props.character.gender}</p>
        <p>{props.character.homeworld.name}</p>
        <p>{props.character.species}</p>
        </div>
    )
}

