import React from 'react';
import Link from './Link';
import Submenu from './Submenu.js';
import Menu from './Wrapper';

export default () => (
  <Menu>
    <Link to="#" title="Sports Category" hasSubmenu>Football</Link>
    <Submenu>
      <Link to="#" title="Adidas Shoes" className="current">Shoes</Link>
      <Link to="#" title="Adidas Clothing">Clothing</Link>
      <Link to="#" title="Adidas Accesories">Accesories</Link>
    </Submenu>
    <Link to="#" title="Brands Category" hasSubmenu>Running</Link>
    <Submenu>
      <Link to="#" title="Adidas Shoes" className="current">Shoes</Link>
      <Link to="#" title="Adidas Clothing">Clothing</Link>
      <Link to="#" title="Adidas Accesories">Accesories</Link>
    </Submenu>
    <Link to="#" title="Micoach Category" hasSubmenu>Basketball</Link>
    <Submenu>
      <Link to="#" title="Adidas Shoes" className="current">Shoes</Link>
      <Link to="#" title="Adidas Clothing">Clothing</Link>
      <Link to="#" title="Adidas Accesories">Accesories</Link>
    </Submenu>
  </Menu>
  );
