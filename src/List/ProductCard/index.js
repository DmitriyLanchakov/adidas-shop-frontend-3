import React from 'react';

export default () => {
  return (
    <div className="catalog-item sale">
      <img src={require('./img/adidas-shoes-1.jpg')} srcSet={require('./img/adidas-shoes-1@2x.jpg') + ' 2x, ' + require('./img/adidas-shoes-1@3x.jpg') + ' 3x'} alt="Adidas Shoes 1" className="item-image" />
      <a href="/item" title="Single item page" className="item-link">$170</a>
      <span className="sale-label">Sale</span>
    </div>
  );
};
