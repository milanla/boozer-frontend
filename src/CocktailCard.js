import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const CocktailCard = ({cocktails, showDetail}) => {
  const renderCocktails = cocktails.map(cocktail => (
    <div className="ui card" onClick={(e) => showDetail(e, cocktail)}>
      <NavLink key={cocktail.id} to={`/api/v1/cocktails/${cocktail.id}`}>{cocktail.name}</NavLink>
    </div>
  ))

  return (
    <div className="list">
      {renderCocktails}
    </div>
  )
}

export default CocktailCard;
