import React, { Component } from 'react';

const CocktailDisplay = (props) => {
  return (
    <div className="ui segment">
      <img className="ui centered medium image" src="https://media.giphy.com/media/Wp6EMxmnrz0yc/giphy.gif" alt=""/>
      <h1>{props.obj.name}</h1>
      <div className="content">
        <h3>Description</h3>
        <p>{props.obj.description}</p>
      </div>
      <div className="content">
        <h3>Instructions</h3>
        <p>{props.obj.instructions}</p>
      </div>
      <div className="extra content">
        <h3>Source</h3>
        <p>{props.obj.source}</p>
      </div>
      <div className="extra content">
        <div className="ui button" onClick={() => props.goBack()}>
          main page
        </div>
      </div>
    </div>
  )
}

export default CocktailDisplay
