import React from "react";
import "./StarWars.css";

export default function Character(props) {
  return (
    <div className="character-card">
      <h3>Name: {props.character.name}</h3>
      <p>Birthdate: {props.character.birth_year}</p>
      <p>Mass: {props.character.mass}</p>
      <p>Gender: {props.character.gender}</p>
    </div>
  );
}
