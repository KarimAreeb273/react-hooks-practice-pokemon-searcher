import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
const [pokemonData, setPokemon] = useState([]);
const [search, setSearch] = useState("");

// if you ever need a constant that needs to be changing you will use a usestate!!!!!

// arrays: map and filter 
// useeffect to fetch data
// usestate to change states of components


  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((r) => r.json())
      .then(data => setPokemon(data));
  }, []);

function handleNewPokemon(newPokemon) {
  setPokemon([...pokemonData, newPokemon]);
}

const pokemonFilteredArray = pokemonData.filter((poke) => {
  return poke.name.toLowerCase().includes(search.toLowerCase())
})


console.log(pokemonFilteredArray)

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNewPokemon = {handleNewPokemon}/>
      <br />
      <Search search = {search} setSearch = {setSearch}/>
      <br />
      <PokemonCollection pokemonData = {pokemonFilteredArray}/> 
    </Container>
  );
}

export default PokemonPage;















// const pokemonFilterArray = pokemonData.filter((poke) => {
//   return poke.name.toLowerCase().includes(search.toLowerCase());
// })