import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import List from './List';
import Show from './Show';

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path="/" component={List}  />
          <Route path="/item" component={Show}  />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
