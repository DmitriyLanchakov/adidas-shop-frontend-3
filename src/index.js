import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Catalog from './Catalog';
import Details from './Details';
import Sidebar from './Sidebar';
import './styles/fonts.css';

class App extends Component {
  render () {
    return (
      <Router>
        <main className="container">
          <Sidebar />
          <Route exact path="/" component={Catalog}  />
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
