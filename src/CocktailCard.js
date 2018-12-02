import React, { Component } from 'react';

const CocktailCard = (props) => {

  return (
    <div className="ui card" onClick={(e) => props.showPage(e, props.cocktailObj)}>
      <div className="header">
        <h2>{props.cocktailObj.name}</h2>
      </div>
      <div className="image">
        <img src="https://media.giphy.com/media/AxVvjTt0Fa1WEHzMM8/giphy.gif" alt="cocktail" />
      </div>
    </div>
  )
}

export default CocktailCard;
