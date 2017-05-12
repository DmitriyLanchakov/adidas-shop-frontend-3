import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import List from './Catalog';
import Details from './Details';
import Sidebar from './Sidebar';

class App extends Component {
  render () {
    return (
      <Router>
        <main className="container">
          <Sidebar />
          <Route exact path="/" component={List}  />
          <Route path="/item" component={Details}  />
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
