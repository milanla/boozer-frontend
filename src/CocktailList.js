import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const CocktailList = ({cocktails, showDetail}) => {
  const renderCocktails = cocktails.map(cocktail => (
    <div onClick={(e) => showDetail(e, cocktail)}>
      <NavLink key={cocktail.id} to={`/api/v1/cocktails/${cocktail.id}`}>{cocktail.name}</NavLink>
    </div>
  ))

  return (
    <div className="column">
      <div className="ui segment" id="list">
        {renderCocktails}
      </div>
    </div>
  )
}

export default CocktailList;
