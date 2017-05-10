import React from 'react';
import './Item.css';
import logo from './img/logo.png';

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
        <div className="product-container">
          <header className="product-heading">
            <div className="product-heading_title">
              <h1>Ultra <br className="only-desktop-line-break"/>Boost</h1>
              <span className="save-button">Save</span>
            </div>

            <div className="product-heading_price-color-picker">
              <div className="product-heading_color-label">
                <div className="product-heading_color-picker">
                  <button className="choose-color-button gray"></button>
                  <button className="choose-color-button blue"></button>
                  <button className="choose-color-button black"></button>
                  <button className="choose-color-button lightgray"></button>
                </div>
                <span className="sale-label static">Sale</span>
              </div>
              <h2>170$</h2>
            </div>
          </header>

          <div className="product-image-gallery">
            <div className="product-full-image">
              <img src={require('./img/adidas-shoes-3@3x.jpg')} alt="Adidas Shoe Ultra Boost" />
            </div>
            <div className="product-image-captions">
              <img src={require('./img/adidas-shoes-3_caption1.jpg')} alt="Adidas Shoe Ultra Boos left side view" />
              <img src={require('./img/adidas-shoes-3_caption2.jpg')} alt="Adidas Shoe Ultra Boos right side view" />
              <img src={require('./img/adidas-shoes-3_caption3.jpg')} alt="Adidas Shoe Ultra Boos back side view" />
              <img src={require('./img/adidas-shoes-3.jpg')} alt="Adidas Shoe Ultra Boos left side view 2" className="current" />
              <div className="product-more-images-label">
                <span></span>
              </div>
              <button className="product-more-images-button">see more photos</button>
            </div>
          </div>

          <p className="adidas-about">
            <span className="first-word">Adidas</span> is a German multinational corporation, headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories.
          </p>
        </div>

        <button className="product-buy-now-button">Buy Now</button>
      </main>
    </div>
  );
};
