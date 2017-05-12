import React from 'react';

export default (props) => {
  return (
    <img src={props.src} alt="Adidas Shoe Ultra Boos left side view" className={"" + (props.current ? 'current' : '')} />
  );
};
