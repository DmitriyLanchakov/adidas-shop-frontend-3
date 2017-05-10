import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import Main from './Main.js';
import Item from './Item.js';

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main}  />
          <Route path="/item" component={Item}  />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
