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
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e, obj) => {
    e.preventDefault()
    console.log(obj)
  }

  handleClick = (e) => {
    this.setState({
      proportions: [...this.state.proportions, { ingredient_name: '', amount: ''}]
    })
  }

  handleIngredientChange = (e, idx) => {
    const newIng = this.state.proportions.map((obj, objIdx) => {
      if (idx !== objIdx) {
        return obj
      }
      return {...obj, [e.target.name]: e.target.value}
    })
    this.setState({ proportions: newIng })
  }

  addIngredient = () => {
    const { proportions } = this.state

    return proportions.map((obj, idx) => {
      return (
        <div key={idx} className="ui form">
          <div className="field">
            <input
              type="text"
              value={obj.ingredient_name}
              name="ingredient_name"
              placeholder="Ingredient Name"
              onChange={e => this.handleIngredientChange(e, idx)}
            />
          </div>
          <div className="field">
            <input
              type="text"
              value={obj.amount}
              name="amount"
              placeholder="Amount"
              onChange={e => this.handleIngredientChange(e, idx)}
            />
          </div>
          <br />
        </div>
      )
    })
  }

  render() {
    const { name, description, instructions } = this.state

    return (
      <div className="column">
      <div className="ui segment" id="form">
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
          <div className="field">
          <input className="ui small green button" type="submit" value="Add Ingredient" onClick={e => this.handleClick(e)}/>
          </div>
          {this.addIngredient()}
          <div className="field">
            <input className="ui small green button" type="submit" value="Create New Cocktail"/>
          </div>
        </form>
        </div>
      </div>
    )
  }
}
