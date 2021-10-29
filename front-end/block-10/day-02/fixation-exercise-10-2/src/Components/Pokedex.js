import React, {Component} from "react";
import Pokemon from "./Pokemon";
import pokemons from "../Data";


class Pokedex extends Component {
  render() {
    return (
      <seciton className='pokedex'>
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemonList={pokemon}/>
        ))}
      </seciton>
    )
  }
}

export default Pokedex;