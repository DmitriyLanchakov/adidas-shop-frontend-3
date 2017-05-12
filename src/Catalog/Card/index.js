import React from 'react';
import ClassNames from 'classnames';
import { Link } from 'react-router-dom';
import SaleLabel from '../../Components/SaleLabel';

export default (props) => {

  let wrapperClass = ClassNames('catalog-item', {
    'sale': props.sale
  });

  return (
    <div className={wrapperClass}>
      <img src={props.image} alt="Adidas Shoes 1" className="item-image" />
      <Link to="/item" title="Single item page" className="item-link">{'$' + props.price}</Link>
      {props.sale && <SaleLabel />}
    </div>
  );
};
