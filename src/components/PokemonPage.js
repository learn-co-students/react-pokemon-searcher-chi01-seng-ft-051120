import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemon: [],
    };
  }

  componentDidMount() {
    const API = "http://localhost:3000/pokemon";

    fetch(API)
      .then((resp) => resp.json())
      .then((pokemon) => this.setState({ pokemon: pokemon }));
  }

  handleData = (pokemonObj) => {
    const API = "http://localhost:3000/pokemon";

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemonObj),
    };

    console.log("New Pokemon------", pokemonObj);

    fetch(API, configObj)
      .then((resp) => resp.json())
      .then((pokemonObj) => {
        this.setState({
          pokemon: [...this.state.pokemon, pokemonObj],
        });
      });
  };

  render() {
    console.log(this.state);
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm sendData={this.handleData} />
        <br />
        <Search />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} />
      </Container>
    );
  }
}

export default PokemonPage;
