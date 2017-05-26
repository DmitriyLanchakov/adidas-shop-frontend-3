/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Redirect, Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import media from './styles/media';
import List from './List';
import Details from './Details';
import Sidebar from './Sidebar';
import './styles/common.css';
import './styles/fonts.css';

const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
  padding: 0;
  margin: 0;
  transition: none;
  flex: 1 0 100%;
  ${media.tablet`
    flex-flow: row nowrap;
  `}
`;

const App = () => (
  <Router>
    <Main>
      <Sidebar />
      <Switch>
        <Route exact path="/products/:sport/:group/" component={List} />
        <Route path="/products/:sport/:group/:id" component={Details} />
        <Redirect from="/" to="/products/football/shoes" />
      </Switch>
    </Main>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
