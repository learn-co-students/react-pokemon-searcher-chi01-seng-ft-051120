import React from "react";
import { Form } from "semantic-ui-react";

class PokemonForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      hp: 0,
      frontUrl: "",
      backUrl: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, hp, frontUrl, backUrl } = this.state;
    const pokemonObj = {
      name: name,
      hp: hp,
      sprites: {
        front: frontUrl,
        back: backUrl,
      },
    };

    this.props.sendData(pokemonObj);
  };

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
              onChange={this.handleChange}
            />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;
