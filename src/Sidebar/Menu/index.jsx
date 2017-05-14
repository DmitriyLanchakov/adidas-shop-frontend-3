import React from 'react';
import styled from 'styled-components';
import media from '../../styles/media';
import Link from './Link';
import Submenu from './Submenu';

const Menu = styled.nav`
  display: none;
  ${media.tablet`
    display: block;
    text-align: center;
    font-size: 24px;
    align-items: center;
    margin-top: 150px;
  `}
`;

export default () => (
  <Menu>
    <Link to="#" title="Sports Category" hasSubmenu opened>Sports</Link>
    <Submenu />
    <Link to="#" title="Brands Category">Brands</Link>
    <Link to="#" title="Micoach Category">Micoach</Link>
  </Menu>
  );
