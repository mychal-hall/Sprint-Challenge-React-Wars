import React from 'react';

export default function Character(props) {
    return (
        <div>
        <h3>{props.character.name}</h3>
        <p>{props.character.birth_year}</p>
        <p>{props.character.gender}</p>
        <p>{props.character.species[0]}</p>
        </div>
    )
}

