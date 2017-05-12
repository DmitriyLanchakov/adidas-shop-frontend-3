import React from 'react';
import Button from './Button';

export default () => {
  return (
    <nav className="catalog-filters">
      <span className="filters-icon"></span>
      <div className="filter-container">
        <Button value="men" classes="men" current />
        <Button value="women" />
      </div>
      <div className="filter-container">
        <span className="filter-heading">Size</span>
        <Button value="36" />
        <Button value="37" />
        <Button value="39" />
        <Button value="40" />
        <Button value="41" />
        <Button value="42" current/>
        <Button value="43" />
      </div>
    </nav>
  );
};
