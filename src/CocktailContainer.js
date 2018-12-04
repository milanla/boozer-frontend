import React, { Component } from 'react';
import CocktailList from './CocktailList';
import CocktailDisplay from './CocktailDisplay';
import Form from './Form';
import { Route } from 'react-router-dom';

class CocktailContainer extends Component {

  state = {
    cocktails: [],
    cocktailDetail: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/cocktails')
      .then(res => res.json())
      .then(json => this.setState({ cocktails: json }))
  }

  handleClick = (e, obj) => {
    e.preventDefault()
    console.log('made it')
    fetch('http://localhost:3000/api/v1/cocktails/' + obj.id)
      .then(res => res.json())
      .then(json => this.setState({
        cocktailDetail: json.proportions
      }))
  }

  addNewCocktail = (e, obj) => {
    // console.log('back in container')
    // console.log(obj)
    fetch('http://localhost:3000/api/v1/cocktails/', {
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: obj.name,
        description: obj.description,
        instructions: obj.instructions,
        source: obj.source
      })
    })
      .then(res => res.json())
      .then(json => this.addNewIngredient(json, obj))
    // need create action in cocktail controller
  }

  addNewIngredient = (newCocktail, obj) => {
    console.log(obj.proportions)
    fetch('http://localhost:3000/api/v1/ingredients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: obj.proportions[0]["ingredient_name"]
      })
    })
      .then(res => res.json())
      .then(json => this.addNewProportion(json, newCocktail, obj))
  }

  addNewProportion = (newIngredient, newCocktail, obj) => {
    fetch('http://localhost:3000/api/v1/proportions', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        amount: obj.proportions[0]["amount"],
        cocktail_id: newCocktail.id,
        ingredient_id: newIngredient.id
      })
    })
      .then(res => res.json())
      .then(console.log)
  }

  render() {
    const { cocktails, cocktailDetail } = this.state
    const { match } = this.props

    return (
      <div className="ui three column grid">
        <Route path={`${match.url}`} render={(props) => <CocktailList {...props} cocktails={cocktails} showDetail={this.handleClick}/>} />

        {cocktails.map(cocktail => (
          <Route path={`${match.url}/:cocktailId`} render={(props) => <CocktailDisplay {...props} cocktail={cocktail} cocktailDetail={cocktailDetail}/>} />
        ))}
        <Form addNewCocktail={this.addNewCocktail}/>
      </div>
    )
  }

}

export default CocktailContainer;
