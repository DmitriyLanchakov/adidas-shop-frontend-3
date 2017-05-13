import React from 'react';
import ClassNames from 'classnames';

export default (props) => {
  const imgClass = ClassNames({
    current: props.current,
  });

  return (
    <img src={props.src} alt="Adidas Shoe Ultra Boos left side view" className={imgClass} />
  );
};
