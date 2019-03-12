import React from "react";

import Character from "./Character";

export default function StarWars(props) {
  return (
    <div className="card-container">
      {props.starwarsChars.map(character => (
        <Character character={character} />
      ))}
    </div>
  );
}
