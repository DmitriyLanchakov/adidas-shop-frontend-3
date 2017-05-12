import React from 'react';
import Header from './Header';
import Gallery from './Gallery';
import Paragraph from './Paragraph';
import Button from './Button';
import './Details.css'

export default () => {
  return (
    <main className="catalog">
      <div className="product-container">
        <Header />
        <Gallery />
        <Paragraph />
      </div>
      <Button />
    </main>
  );
};
