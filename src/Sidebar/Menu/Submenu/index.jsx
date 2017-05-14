import React from 'react';
import styled from 'styled-components';
import Link from '../Link';
import Menu from '../../Menu';

const SubLink = styled(Link)`
  font-family: 'AndaleMono';
  margin-bottom: 25px;
`;

const Submenu = styled(Menu)`
  margin: -15px 0 50px 0;
`;

export default () => (
  <Submenu>
    <SubLink to="#" title="Adidas Shoes" current>Shoes</SubLink>
    <SubLink to="#" title="Adidas Clothing">Clothing</SubLink>
    <SubLink to="#" title="Adidas Accesories">Accesories</SubLink>
  </Submenu>
  );
