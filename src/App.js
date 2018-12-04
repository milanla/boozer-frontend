import React, { Component } from 'react';
import './App.css';
import '../node_modules/semantic-ui/dist/semantic.min.css';
import CocktailContainer from './CocktailContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  state = {
    cocktails: [],
    cocktailDetail: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/cocktails')
      .then(res => res.json())
      .then(json => this.setState({ cocktails: json }))
  }

  handleClick = (e, obj) => {
    e.preventDefault()
    console.log('made it')
    fetch('http://localhost:3000/api/v1/cocktails/' + obj.id)
      .then(res => res.json())
      .then(json => this.setState({
        cocktailDetail: json.proportions
      }))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Boozer</h1>
        </div>
        <div className="mainWrapper">
          <Router>
            <React.Fragment>
              <Route path='/api/v1/cocktails'
              render={(props) => <CocktailContainer {...props} cocktails={this.state.cocktails}
              showDetail={this.handleClick}
              cocktailDetail={this.state.cocktailDetail}
              />}
              />
            </React.Fragment>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
