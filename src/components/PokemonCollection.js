import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  renderPokemon = () => {
    return this.props.pokemon.map((pokemonObj, idx) => {
      return <PokemonCard pokemon={pokemonObj} key={idx} />;
    });
  };

  render() {
    return <Card.Group itemsPerRow={6}>{this.renderPokemon()}</Card.Group>;
  }
}

export default PokemonCollection;
