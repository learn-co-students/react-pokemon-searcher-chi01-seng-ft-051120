import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      cardImage: this.props.pokeData.sprites.front
    }
  }

  toggleCard = () => {
    let image = (this.state.cardImage === this.props.pokeData.sprites.front 
    ?
    this.props.pokeData.sprites.back
    :
    this.props.pokeData.sprites.front)
    this.setState({
      cardImage: image
    })    
  }


  render() {
    
    const { name, hp} = this.props.pokeData

    return (
      <Card>
        <div onClick={this.toggleCard}>
          <div className="image">
            <img src={this.state.cardImage} alt="oh no!" />
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
    )
  }
}

export default PokemonCard
