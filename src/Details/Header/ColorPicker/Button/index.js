import React from 'react';
import ClassNames from 'classnames';

export default (props) => {

  let btnClass = ClassNames('choose-color-button', props.color);

  return (
    <button className={btnClass}></button>
  );
};
