import React from 'react';
import Sidebar from './Sidebar';
import './List.css';

export default () => {
  return (
    <div className="container">
      <Sidebar />
      <main className="catalog">
        <h2>Items Catalog</h2>
        <nav className="catalog-filters">
          <span className="filters-icon"></span>
          <div className="filter-container">
            <button className="filter-button men current">Men</button>
            <button className="filter-button">Women</button>
          </div>
          <div className="filter-container">
            <span className="filter-heading">Size</span>
            <button className="filter-button">36</button>
            <button className="filter-button">37</button>
            <button className="filter-button">38</button>
            <button className="filter-button">39</button>
            <button className="filter-button">40</button>
            <button className="filter-button current">41</button>
            <button className="filter-button">42</button>
          </div>
        </nav>

        <div className="catalog-grid">
          <div className="row">
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
      </main>
    </div>
  );
};
