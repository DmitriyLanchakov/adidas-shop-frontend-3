import React from 'react';
import { Link } from 'react-router-dom';
import Submenu from './Submenu';

export default () => (
  <nav className="catalog-categories">
    <Link to="#" title="Sports Category" className="has-submenu opened">Sports</Link>
    <Submenu />
    <Link to="#" title="Brands Category">Brands</Link>
    <Link to="#" title="Micoach Category">Micoach</Link>
  </nav>
  );
