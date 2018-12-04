import React, { Component } from 'react';
import CocktailList from './CocktailList';
import CocktailDisplay from './CocktailDisplay';
import Form from './Form';
import { Route } from 'react-router-dom';

const CocktailContainer = ({match, cocktails, showDetail, cocktailDetail}) => (
  <div className="ui three column grid">
    <Route path={`${match.url}`} render={(props) => <CocktailList {...props} cocktails={cocktails} showDetail={showDetail}/>} />

    {cocktails.map(cocktail => (
      <Route path={`${match.url}/:cocktailId`} render={(props) => <CocktailDisplay {...props} cocktail={cocktail} cocktailDetail={cocktailDetail}/>} />
    ))}
    <Form/>
  </div>
)

export default CocktailContainer;
