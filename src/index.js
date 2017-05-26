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

const Products = () => (
  <div>
    <Route exact path="/" component={List} />
    <Route exact path="/products/:sport?/:group?/" component={List} />
    <Route exact path="/products/:sport/:group/:id" component={Details} />
  </div>
);


const App = () => (
  <Router>
    <Main>
      <Sidebar />
      <Route path="/" component={Products} />
    </Main>
  </Router>
);
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
