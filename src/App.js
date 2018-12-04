import React, { Component } from 'react';
import './App.css';
import '../node_modules/semantic-ui/dist/semantic.min.css';
import CocktailContainer from './CocktailContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

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
              render={(props) => <CocktailContainer {...props}
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
