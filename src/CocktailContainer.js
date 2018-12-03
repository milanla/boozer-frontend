import React, { Component } from 'react';
import CocktailCard from './CocktailCard';
import CocktailDisplay from './CocktailDisplay';
import { Route } from 'react-router-dom';

const CocktailContainer = ({match, cocktails, showDetail, cocktailDetail}) => (
  <div>
    <Route path={`${match.url}`} render={(props) => <CocktailCard {...props} cocktails={cocktails} showDetail={showDetail}/>} />

    {cocktails.map(cocktail => (
      <Route path={`${match.url}/:cocktailId`} render={(props) => <CocktailDisplay {...props} cocktail={cocktail} cocktailDetail={cocktailDetail}/>} />
    ))}
  </div>
)

export default CocktailContainer;
