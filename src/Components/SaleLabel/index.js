import React from 'react';
import ClassNames from 'classnames';

export default (props) => {

  let labelClass = ClassNames('sale-label', {
    'static' : props.static
  });

  return (
    <span className={labelClass}>Sale</span>
  );
};
