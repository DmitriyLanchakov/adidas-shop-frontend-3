import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <div className={"catalog-item " + (props.sale ? 'sale' : '')}>
      <img src={props.image} alt="Adidas Shoes 1" className="item-image" />
      <Link to="/item" title="Single item page" className="item-link">{'$' + props.price}</Link>
      {props.sale && <span className="sale-label">Sale</span>}
    </div>
  );
}
