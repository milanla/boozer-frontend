import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    name: '',
    description: '',
    instructions:''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="display">
        <h2>Add a New Cocktail</h2>
        <form className="ui form">
          <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
          <input type="text" name="description" placeholder="Description" value={this.state.description}
          onChange={this.handleChange}/>
          <input type="text" name="instructions" placeholder="Instructions" value={this.state.instructions}
          onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
