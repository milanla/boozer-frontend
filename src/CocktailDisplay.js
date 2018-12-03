import React, { Component } from 'react';

const CocktailDisplay = ({match, cocktail, cocktailDetail}) => {

  let arrayOfProportions = cocktailDetail.map(p => {
    return <li>{p.ingredient_name}</li>
  })

  return (

    cocktail.id === parseInt(match.params.id) ? (<div className='display'>
      <h1>{cocktail.name}</h1>
      <p>{cocktail.description}</p>
      <ul>{arrayOfProportions}</ul>
    </div>) : null
  )
}

export default CocktailDisplay
