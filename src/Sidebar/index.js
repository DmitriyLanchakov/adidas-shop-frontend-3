import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Menu from './Menu';

export default () => {
  return (
    <aside className="sidebar">
      <Logo />
      <Search />
      <Menu />
    </aside>
  );
};
