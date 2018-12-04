import React, { Component } from 'react';

const CocktailDisplay = ({match, cocktail, cocktailDetail}) => {

  let arrayOfProportions = cocktailDetail.map(p => {
    return <div>{p.ingredient_name}</div>
  })

  return (
    cocktail.id === parseInt(match.params.cocktailId) ? (<div className="column">
      <div className="ui segment">
      <h1>{cocktail.name}</h1>
      <p>{cocktail.description}</p>
      <h3>Instructions</h3>
      <p>{cocktail.instructions}</p>
      <h3>Ingredients</h3>
      <div>{arrayOfProportions}</div>
      </div>
    </div>) : null
  )
}

export default CocktailDisplay
