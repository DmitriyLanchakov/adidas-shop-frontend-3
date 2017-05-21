import React from 'react';
import Menu from './Wrapper';
import Item from './Item';

export default () => (
  <Menu>
    <Item to="#" title="Footbal" hasSubmenu />
    <Item to="#" title="Running" hasSubmenu />
    <Item to="#" title="Basketball" hasSubmenu />
  </Menu>
  );
