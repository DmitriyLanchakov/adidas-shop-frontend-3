import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav className="catalog-categories catalog-subcategories">
      <Link to="#" title="Adidas Shoes" className="current">Shoes</Link>
      <Link to="#" title="Adidas Clothing">Clothing</Link>
      <Link to="#" title="Adidas Accesories">Accesories</Link>
    </nav>
  );
}
