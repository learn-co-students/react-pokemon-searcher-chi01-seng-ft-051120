import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  constructor() {
    super();

    this.state = {
      isFlipped: false,
    };
  }
  render() {
    const { id, name, hp, sprites } = this.props.pokemon;
    return (
      <Card>
        <div>
          <div className="image">
            <img src={sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
