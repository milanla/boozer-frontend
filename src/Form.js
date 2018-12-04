import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    name: '',
    description: '',
    instructions:'',
    proportions: [{
      ingredient_name: '',
      amount: ''
    }]
  }

  handleChange = (e) => {
    // console.log(e.target.value)
    if (["ingredient_name", "amount"].includes(e.target.name) ) {
      let proportions = [...this.state.proportions]

      proportions[0][e.target.name] = e.target.value.toUpperCase()

      this.setState({ proportions }, () => console.log(this.state))
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() })
    }
  }

  submitHandler = (e, obj) => {
    e.preventDefault()
    console.log(obj)
  }

  render() {
    const {name, description, instructions, proportions} = this.state

    return (
      <div className="column">
      <div className="ui segment">
        <h2>Add a New Cocktail</h2>
        <form className="ui form" onSubmit={(e) => this.submitHandler(e, this.state)}>
          <div className="field">
          <input type="text" name="name" placeholder="Name" value={name} onChange={(e)=> this.handleChange(e)}/>
          </div>
          <div className="field">
          <input type="text" name="description" placeholder="Description" value={description}
          onChange={(e)=> this.handleChange(e)}/>
          </div>
          <div className="field">
          <input type="text" name="instructions" placeholder="Instructions" value={instructions}
          onChange={(e)=> this.handleChange(e)}/>
          </div>
          <input className="ui small green button" type="submit" value="Add Ingredient"/>
        </form>
        </div>
      </div>
    )
  }
}
