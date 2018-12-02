import React, { Component } from 'react';
import './App.css';
import '../node_modules/semantic-ui/dist/semantic.min.css';
import CocktailContainer from './CocktailContainer'
import CocktailDisplay from './CocktailDisplay'

class App extends Component {
  state = {
    cocktails: [],
    selectedCocktail: {},
    isClicked: false
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/cocktails')
      .then(res => res.json())
      .then(json => this.setState({ cocktails: json }))
  }

  handleClick = (e, obj) => {
    this.setState({
      selectedCocktail: obj,
      isClicked: !this.state.isClicked
    })
  }

  handleGoBack = () => {
    console.log('made it')
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Boozer</h1>
        </div>
          {this.state.isClicked?
            <CocktailDisplay obj={this.state.selectedCocktail}
            goBack={this.handleGoBack}/>
            :
            <CocktailContainer  cocktails={this.state.cocktails}
            showPage={this.handleClick}/>
          }
      </div>
    );
  }
}

export default App;
