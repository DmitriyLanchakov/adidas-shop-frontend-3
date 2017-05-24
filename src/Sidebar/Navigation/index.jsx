import React from 'react';
import styled from 'styled-components';
import media from '../../styles/media';
import Menu from './Menu';
import Link from './Menu/Submenu/Link';

const Nav = styled.nav`
  display: none;
  ${media.tablet`
    display: block;
    text-align: center;
    align-items: center;
    margin-top: 150px;
  `}
`;

export default () => (
  <Nav>
    <Menu title="Footbal">
      <Link to="#" title="Adidas Shoes">Shoes</Link>
      <Link to="#" title="Adidas Clothing">Clothing</Link>
      <Link to="#" title="Adidas Accesories">Accesories</Link>
    </Menu>
    <Menu title="Running">
      <Link to="#" title="Adidas Shoes">Shoes</Link>
      <Link to="#" title="Adidas Clothing">Clothing</Link>
      <Link to="#" title="Adidas Accesories">Accesories</Link>
    </Menu>
    <Menu title="Basketball">
      <Link to="#" title="Adidas Shoes">Shoes</Link>
      <Link to="#" title="Adidas Clothing">Clothing</Link>
      <Link to="#" title="Adidas Accesories">Accesories</Link>
    </Menu>
  </Nav>
  );
