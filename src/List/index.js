import React from 'react';
import Card from './ProductCard';

export default () => {
  return (
    <div className="catalog-grid">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <Card />
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div className="catalog-item sale">
            <img src={require('./img/adidas-shoes-2.jpg')} srcSet={require('./img/adidas-shoes-2@2x.jpg') + ' 2x, ' + require('./img/adidas-shoes-2@3x.jpg') + ' 3x'} alt="Adidas Shoes 2" className="item-image" />
            <a href="/item" title="Single item page" className="item-link">$240.99</a>
            <span className="sale-label">Sale</span>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div className="catalog-item">
            <img src={require('./img/adidas-shoes-3.jpg')} srcSet={require('./img/adidas-shoes-3@2x.jpg') + ' 2x, ' + require('./img/adidas-shoes-3@3x.jpg') + ' 3x'} alt="Adidas Shoes 3" className="item-image" />
            <a href="/item" title="Single item page" className="item-link">$1024</a>
            <span className="sale-label">Sale</span>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div className="catalog-item">
            <img src={require('./img/adidas-shoes-2.jpg')} srcSet={require('./img/adidas-shoes-2@2x.jpg') + ' 2x, ' + require('./img/adidas-shoes-2@3x.jpg') + ' 3x'} alt="Adidas Shoes 2" className="item-image" />
            <a href="/item" title="Single item page" className="item-link">$170</a>
            <span className="sale-label">Sale</span>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div className="catalog-item">
            <img src={require('./img/adidas-shoes-3.jpg')} srcSet={require('./img/adidas-shoes-3@2x.jpg') + ' 2x, ' + require('./img/adidas-shoes-3@3x.jpg') + ' 3x'} alt="Adidas Shoes 3" className="item-image" />
            <a href="/item" title="Single item page" className="item-link">$230</a>
            <span className="sale-label">Sale</span>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div className="catalog-item sale">
            <img src={require('./img/adidas-shoes-1.jpg')} srcSet={require('./img/adidas-shoes-1@2x.jpg') + ' 2x, ' + require('./img/adidas-shoes-1@3x.jpg') + ' 3x'} alt="Adidas Shoes 1" className="item-image" />
            <a href="/item" title="Single item page" className="item-link">$190</a>
            <span className="sale-label">Sale</span>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div className="catalog-item sale">
            <img src={require('./img/adidas-shoes-1.jpg')} srcSet={require('./img/adidas-shoes-1@2x.jpg') + ' 2x, ' + require('./img/adidas-shoes-1@3x.jpg') + ' 3x'} alt="Adidas Shoes 1" className="item-image" />
            <a href="/item" title="Single item page" className="item-link">$170</a>
            <span className="sale-label">Sale</span>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div className="catalog-item sale">
            <img src={require('./img/adidas-shoes-2.jpg')} srcSet={require('./img/adidas-shoes-2@2x.jpg') + ' 2x, ' + require('./img/adidas-shoes-2@3x.jpg') + ' 3x'} alt="Adidas Shoes 2" className="item-image" />
            <a href="/item" title="Single item page" className="item-link">$240.99</a>
            <span className="sale-label">Sale</span>
          </div>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div className="catalog-item">
            <img src={require('./img/adidas-shoes-3.jpg')} srcSet={require('./img/adidas-shoes-3@2x.jpg') + ' 2x, ' + require('./img/adidas-shoes-3@3x.jpg') + ' 3x'} alt="Adidas Shoes 3" className="item-image" />
            <a href="/item" title="Single item page" className="item-link">$1024</a>
            <span className="sale-label">Sale</span>
          </div>
        </div>
      </div>
    </div>
  );
};
