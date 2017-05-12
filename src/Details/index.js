import React from 'react';
import Header from './Header';
import Gallery from './Gallery';
import Description from './Description';
import Button from './Button';
import './Details.css'

export default () => {
  return (
    <main className="catalog">
      <div className="product-container">
        <Header />
        <Gallery />
        <Description />
      </div>
      <Button />
    </main>
  );
};
