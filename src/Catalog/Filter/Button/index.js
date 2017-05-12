import React from 'react';

export default (props) => {
  return (
    <button className={"filter-button " + (props.classes ? props.classes : ' ') + (props.current ? ' current' : '')}>{props.value}</button>
  );
};
