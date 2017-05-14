import React from 'react';
import Link from './Link';
import Submenu from './Submenu';
import Menu from './Wrapper';


export default () => (
  <Menu>
    <Link to="#" title="Sports Category" hasSubmenu opened>Sports</Link>
    <Submenu />
    <Link to="#" title="Brands Category">Brands</Link>
    <Link to="#" title="Micoach Category">Micoach</Link>
  </Menu>
  );
