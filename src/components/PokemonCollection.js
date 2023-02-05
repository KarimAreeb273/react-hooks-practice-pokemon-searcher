import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonData}) {
  const cardsArr = pokemonData.map((poke) => {
    return <PokemonCard key={poke.id} pokeName={poke.name} pokeHp={poke.hp} pokeSprite={poke.sprites}/>;
  })
  return (
    <Card.Group itemsPerRow={6}>
      {cardsArr}
    </Card.Group>
  );
}

export default PokemonCollection;

// Render something you want to use map. 

// db.json = cards with details, to render it you need to use a function that will grab all the data and display so map will iterate over the db.json and ti will return a new array,  
 // db.json is just an array of object. maps iterate over an array