import React from 'react';

export default (props) => {
  return (
    <button className={"choose-color-button " + (props.color ? props.color: '')}></button>
  );
};
