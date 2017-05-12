import React from 'react';
import ClassNames from 'classnames';

export default (props) => {

  let btnClass = ClassNames('filter-button', props.classes, {
    'current' : props.current
  });

  return (
    <button className={btnClass}>{props.value}</button>
  );
};
