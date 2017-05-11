import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import List from './List.js';
import Show from './Show.js';

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={List}  />
          <Route path="/item" component={Show}  />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
