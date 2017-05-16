import React from 'react';
import { Submenu, SubLink } from './styles';

export default () => (
  <Submenu>
    <SubLink to="#" title="Adidas Shoes" className="current">Shoes</SubLink>
    <SubLink to="#" title="Adidas Clothing">Clothing</SubLink>
    <SubLink to="#" title="Adidas Accesories">Accesories</SubLink>
  </Submenu>
);
