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
        instructions: obj.instructions
      })
    })
      .then(res => res.json())
      .then(json => this.addNewProportion(json, obj))
    // need create action in cocktail controller
  }

  addNewProportion = (newCocktail, obj) => {

    console.log(newCocktail)
    // console.log(obj.proportions)
    console.log('in proportions')
    fetch('http://localhost:3000/api/v1/cocktails/' + newCocktail.id, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        proportions: obj.proportions
      })
    })
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
