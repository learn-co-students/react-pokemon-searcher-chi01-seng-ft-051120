import React from 'react'
import { Form } from 'semantic-ui-react'

const API = "http://localhost:3000/pokemon"

class PokemonForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    }
  }

  handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const {name, frontUrl, backUrl} = this.state
    const hp = parseInt(this.state.hp, 10)
    if (isNaN(hp)) {
      alert('HP must be a number!')
      return
    }
    if ((name.length === 0) || (frontUrl.length === 0) || (backUrl.length === 0)) {
      alert('No fields can be left blank!')
      return
    }

    const payload = {
      id: this.props.numberOfNextPokemon,
      name: name,
      hp: hp,
      sprites: {
        front: frontUrl,
        back: backUrl
      }
    }

    this.setState({
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    })

    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }

    fetch(API, reqObj)
    .then(resp => resp.json())
    .then(json => {
      this.props.fetchPokemon()
    })
  }


  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
