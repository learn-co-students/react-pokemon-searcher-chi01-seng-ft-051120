import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const API = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      filterValue: ""
    }
  }

  componentDidMount() {
    this.fetchPokemon()
  }

  fetchPokemon = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(pokemon => {
      this.setState({
        pokemon: pokemon
      })
    })
  }

  handleChange = (input) => {
    this.setState({
      filterValue: input
    })
  }

  filteredPokemon = () => {
    const inputLength = this.state.filterValue.length 
    if (inputLength === 0) {
      return this.state.pokemon
    }
    const filteredPokemon = this.state.pokemon.filter(pokemon => (pokemon.name.substr(0, inputLength).toLowerCase() === this.state.filterValue))
    return filteredPokemon
  }

  render() {
    const filteredPokemon = this.filteredPokemon()
    const numberOfNextPokemon = this.state.pokemon.length + 1
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm fetchPokemon={this.fetchPokemon} numberOfNextPokemon={numberOfNextPokemon}/>
        <br />
        <Search handleChange={this.handleChange}/>
        <br />
        <PokemonCollection pokemon={filteredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
