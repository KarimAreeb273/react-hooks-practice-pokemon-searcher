import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokeName, pokeHp, pokeSprite}) {
const [frontCard, setFrontCard] = useState(true);

  function handleClick() {
    (setFrontCard(!frontCard));
  }
  return (
    <Card>
      <div>
        <div className="image">
          <img onClick = {handleClick} src = {frontCard ? pokeSprite.front : pokeSprite.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{pokeName}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokeHp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

