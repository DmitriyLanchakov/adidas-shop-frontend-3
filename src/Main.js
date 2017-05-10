import React from 'react';
import './Main.css';

//import images
import logo from './img/logo.png';
import shoes1Image from './img/adidas-shoes-1.jpg';
  import shoes1X2Image from './img/adidas-shoes-1@2x.jpg';
  import shoes1X3Image from './img/adidas-shoes-1@3x.jpg';
import shoes2Image from './img/adidas-shoes-2.jpg';
  import shoes2X2Image from './img/adidas-shoes-2@2x.jpg';
  import shoes2X3Image from './img/adidas-shoes-2@3x.jpg';
import shoes3Image from './img/adidas-shoes-3.jpg';
  import shoes3X2Image from './img/adidas-shoes-3@2x.jpg';
  import shoes3X3Image from './img/adidas-shoes-3@3x.jpg';

export default () => {
  return (
    <div className="container">
      <aside className="sidebar">
        <a href="/" title="Adidas Online Shop" className="logo">
          <img src={logo} alt="Adidas Logo" />
        </a>

        <form className="search-form">
          <label htmlFor="search-input" className="search-input-label">Search</label>
          <input type="text" name="search" className="search-form-input" id="search-input" />
        </form>

        <nav className="catalog-categories">
          <a href="#" title="Sports Category" className="has-submenu opened">Sports</a>
          <nav className="catalog-categories catalog-subcategories">
            <a href="#" title="Adidas Shoes" className="current">Shoes</a>
            <a href="#" title="Adidas Clothing">Clothing</a>
            <a href="#" title="Adidas Accesories">Accesories</a>
          </nav>
          <a href="#" title="Brands Category">Brands</a>
          <a href="#" title="Micoach Category">Micoach</a>
        </nav>
      </aside>

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
            <div className="col-xs-12 col-lg-4">
              <div className="catalog-item sale">
                <img src={shoes1Image} srcSet={shoes1X2Image + ' 2x, ' + shoes1X3Image + ' 3x'} alt="Adidas Shoes 1" className="item-image" />
                <a href="/item" title="Single item page" className="item-link">$170</a>
                <span className="sale-label">Sale</span>
              </div>
            </div>

            <div className="col-xs-12 col-lg-4">
              <div className="catalog-item sale">
                <img src={shoes2Image} srcSet={shoes2X2Image + ' 2x, ' + shoes2X3Image + ' 3x'} alt="Adidas Shoes 2" className="item-image" />
                <a href="/item" title="Single item page" className="item-link">$240.99</a>
                <span className="sale-label">Sale</span>
              </div>
            </div>

            <div className="col-xs-12 col-lg-4">
              <div className="catalog-item">
                <img src={shoes3Image} srcSet={shoes3X2Image + ' 2x, ' + shoes3X3Image + ' 3x'} alt="Adidas Shoes 3" className="item-image" />
                <a href="/item" title="Single item page" className="item-link">$1024</a>
                <span className="sale-label">Sale</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-lg-4">
              <div className="catalog-item">
                <img src={shoes2Image} srcSet={shoes2X2Image + ' 2x, ' + shoes2X3Image + ' 3x'} alt="Adidas Shoes 2" className="item-image" />
                <a href="/item" title="Single item page" className="item-link">$170</a>
                <span className="sale-label">Sale</span>
              </div>
            </div>

            <div className="col-xs-12 col-lg-4">
              <div className="catalog-item">
                <img src={shoes3Image} srcSet={shoes3X2Image + ' 2x, ' + shoes3X3Image + ' 3x'} alt="Adidas Shoes 3" className="item-image" />
                <a href="/item" title="Single item page" className="item-link">$230</a>
                <span className="sale-label">Sale</span>
              </div>
            </div>

            <div className="col-xs-12 col-lg-4">
              <div className="catalog-item sale">
                <img src={shoes1Image} srcSet={shoes1X2Image + ' 2x, ' + shoes1X3Image + ' 3x'} alt="Adidas Shoes 1" className="item-image" />
                <a href="/item" title="Single item page" className="item-link">$190</a>
                <span className="sale-label">Sale</span>
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col-xs-12 col-lg-4">
              <div className="catalog-item sale">
                <img src={shoes1Image} srcSet={shoes1X2Image + ' 2x, ' + shoes1X3Image + ' 3x'} alt="Adidas Shoes 1" className="item-image" />
                <a href="/item" title="Single item page" className="item-link">$170</a>
                <span className="sale-label">Sale</span>
              </div>
            </div>

            <div className="col-xs-12 col-lg-4">
              <div className="catalog-item sale">
                <img src={shoes2Image} srcSet={shoes2X2Image + ' 2x, ' + shoes2X3Image + ' 3x'} alt="Adidas Shoes 2" className="item-image" />
                <a href="/item" title="Single item page" className="item-link">$240.99</a>
                <span className="sale-label">Sale</span>
              </div>
            </div>

            <div className="col-xs-12 col-lg-4">
              <div className="catalog-item">
                <img src={shoes3Image} srcSet={shoes3X2Image + ' 2x, ' + shoes3X3Image + ' 3x'} alt="Adidas Shoes 3" className="item-image" />
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
