import React from 'react';

export default (props) => {
  return (
    <span className={"sale-label " + (props.static ? 'static' : '')}>Sale</span>
  );
};
