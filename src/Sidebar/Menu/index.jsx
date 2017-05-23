import React from 'react';
import Wrapper from './Wrapper';
import Menu from './Item';
import { SubLink } from './Item/Submenu';

export default () => (
  <Wrapper>
    <Menu title="Footbal">
      <SubLink to="#" title="Adidas Shoes">Shoes</SubLink>
      <SubLink to="#" title="Adidas Clothing">Clothing</SubLink>
      <SubLink to="#" title="Adidas Accesories">Accesories</SubLink>
    </Menu>
    <Menu title="Running">
      <SubLink to="#" title="Adidas Shoes">Shoes</SubLink>
      <SubLink to="#" title="Adidas Clothing">Clothing</SubLink>
      <SubLink to="#" title="Adidas Accesories">Accesories</SubLink>
    </Menu>
    <Menu title="Basketball">
      <SubLink to="#" title="Adidas Shoes">Shoes</SubLink>
      <SubLink to="#" title="Adidas Clothing">Clothing</SubLink>
      <SubLink to="#" title="Adidas Accesories">Accesories</SubLink>
    </Menu>
  </Wrapper>
  );
