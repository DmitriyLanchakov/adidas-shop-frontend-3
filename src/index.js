/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
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
      <Route component={Sidebar} />
      <Route exact path="/:sport?/:group?" component={List} />
      <Route exact path="/:sport/:group/:id" component={Details} />
    </Main>
  </Router>
);
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
