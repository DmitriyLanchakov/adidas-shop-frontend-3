import React from 'react';
import styled from 'styled-components';
import media from '../styles/media';

const Price = styled.h2`
  font-size: 19vw;
  padding: 0;
  margin: 0;
  color: ${props => props.color};
  font-weight: 400;
  order: 1;
  ${media.tablet`
    font-size: 80px;
    padding: 10px 0;
    margin: 20px 0;
    order: 2;
  `}
`;

export default props => (
  <Price color={props.color}>{props.price !== undefined ? `$${(props.price / 1000).toFixed(2)}` : '$0.00'}</Price>
);
