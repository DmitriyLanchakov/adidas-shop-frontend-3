import React from 'react';
import './Show.css';
import Sidebar from './Sidebar';

export default () => {
  return (
    <div className="container">
      <Sidebar />

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
