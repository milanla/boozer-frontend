import React, { Component } from 'react';
import CocktailCard from './CocktailCard'


export default class CocktailContainer extends Component {

  render() {
    let arrayOfCocktails = this.props.cocktails.map(cocktailObj => {
      return <CocktailCard key={cocktailObj.id} cocktailObj={cocktailObj}
      showPage={this.props.showPage}/>
    })
    return (
      <div className="ui four column centered grid">
        {arrayOfCocktails}
      </div>
    )
  }
}
