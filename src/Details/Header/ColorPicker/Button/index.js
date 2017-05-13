import React from 'react';
import ClassNames from 'classnames';

export default (props) => {
  const btnClass = ClassNames('choose-color-button', props.color);

  return (
    <button className={btnClass} />
  );
};
