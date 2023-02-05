import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleNewPokemon}) {

  const [nameForm, setNameForm] = useState({
    name: "",
    hp: 0,
    front: "",
    back: ""
  });

  // const [front, setFrontCard] = useState("");
  // const [back, setBackCard] = useState("");

  function handleChanges(e) {
    setNameForm((prev)=>{
      return({
        ...prev,
        [e.target.name]: e.target.value
      })
    })
  }

  // function handleChangeFront(e) {
  //   const value = e.target.value;
  //   setFrontCard(value);
  // }

  // function handleChangeBack(e) {
  //   const value = e.target.value;
  //   setBackCard(value);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    const newPokemon = {
      name: nameForm.name,
      hp: parseInt(nameForm.hp),
      sprites: {
        front: nameForm.front,
        back: nameForm.back,
      },
  }

  fetch("http://localhost:3001/pokemon", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPokemon),
  })
    .then((r) => r.json())
    .then(handleNewPokemon);
}

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={nameForm.name} onChange = {handleChanges}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={nameForm.hp} onChange = {handleChanges}/>
          <Form.Input

            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={nameForm.front} 
            onChange = {handleChanges}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={nameForm.back}
            onChange = {handleChanges}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
