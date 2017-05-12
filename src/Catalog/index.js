import React from 'react';
import Card from './Card';
import Filter from './Filter';
import shoesImage1 from './adidas-shoes-1.jpg';
import shoesImage2 from './adidas-shoes-2.jpg';
import shoesImage3 from './adidas-shoes-3.jpg';
import './Catalog.css';

export default () => {
  return (
    <main className="catalog">
      <h2>Items Catalog</h2>
      <Filter />
      <div className="catalog-grid">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card image={shoesImage1} price="170" sale />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card image={shoesImage2} price="240.99" sale />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card image={shoesImage3} price="1024" />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card image={shoesImage2} price="240.99" />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card image={shoesImage3} price="1024" />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card image={shoesImage1} price="170" sale />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card image={shoesImage1} price="170" sale />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card image={shoesImage2} price="240.99" sale />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Card image={shoesImage3} price="1024" />
          </div>
        </div>
      </div>
    </main>
  );
};
