import React from 'react'

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
    this.props.handleChange(event.target.value)
  }
  
  render() {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={this.state.input} onChange={this.handleChange}/>
        <i className="search icon" />
      </div>
    </div>
  )}
}

export default Search
