import React from 'react';
import SaveButton from './SaveButton';
import SaleLabel from '../../Components/SaleLabel';
import ColorPicker from './ColorPicker';

export default () => {
  return (
    <header className="product-heading">
      <div className="product-heading_title">
        <h1>Ultra <br className="only-desktop-line-break"/>Boost</h1>
        <SaveButton />
      </div>

      <div className="product-heading_price-color-picker">
        <div className="product-heading_color-label">
          <ColorPicker />
          <SaleLabel static>Sale</SaleLabel>
        </div>
        <h2>170$</h2>
      </div>
    </header>
  );
};
