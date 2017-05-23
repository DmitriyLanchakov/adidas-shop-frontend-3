import React from 'react';
import styled from 'styled-components';
import media from '../styles/media';
import Logo from './Logo';
import Search from './Search';
import Navigation from './Navigation';

const Sidebar = styled.aside`
  display: flex;
  flex-flow: row wrap;
  flex: 1;
  justify-content: flex-start;
  align-content: center;
  background: #0e0e0e;
  ${media.tablet`
    flex: 0 0 327px;
    justify-content: center;
    align-content: flex-start;
  `}
  ${media.desktop`
    flex: 0 0 414px;
  `}
`;

export default () => (
  <Sidebar>
    <Logo />
    <Search />
    <Navigation />
  </Sidebar>
  );
