import React, { Component } from 'react';

const CocktailDisplay = ({match, cocktail, cocktailDetail}) => {

  let arrayOfProportions = cocktailDetail.map(p => {
    return (
      <div>
        <div className="left">{p.ingredient_name}</div>
        <div className="right">{p.amount}</div>
      </div>
    )
  })

  return (
    cocktail.id === parseInt(match.params.cocktailId) ? (<div className="column">
      <div className="ui segment" id="display">
      <h1>{cocktail.name}</h1>
      <p>{cocktail.description}</p>
      <h3>Instructions</h3>
      <p>{cocktail.instructions}</p>
      <h3>Ingredients</h3>
      {arrayOfProportions}
      </div>
    </div>) : null
  )
}

export default CocktailDisplay
