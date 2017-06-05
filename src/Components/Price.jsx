import React from 'react';
import styled from 'styled-components';
import media from '../styles/media';

const Price = styled.span`
  &.list {
    display: block;
    font-size: 30px;
    color: ${props => (props.sale ? '#fff' : '#000')};
    text-decoration: none;
    padding: 23px 0 27px 0;
    transition: none;
    background: ${props => (props.sale ? 'linear-gradient(107deg, #0c09bf, #966dd8)' : '#fff')};
    margin-top: 6px;

    &:hover {
      background-image: ${props => (props.sale ? 'linear-gradient(180deg, #0c09bf, #966dd8)' : 'linear-gradient(107deg, #0c09bf, #966dd8)')};
      color: #fff;
    }
  }

  &.details {
    font-size: 19vw;
    padding: 0;
    margin: 0;
    color: ${props => props.color};
    font-weight: 400;
    ${media.tablet`
      font-size: 80px;
      padding: 10px 0;
      margin: 20px 0;
    `}
  }
`;

const currencies = {
  eur: { symbol: '€', before: true },
  usd: { symbol: '$', before: true },
  rub: { symbol: 'р.', before: false },
};

const getFormattedPrice = (value, currency) => {
  const current = currencies[currency.toLowerCase()];
  return (current.before ?
    current.symbol + (value / 100).toFixed(2) :
    (value / 100).toFixed(2) + current.symbol
  );
};

export default (props) => {
  if (!props.children) return false;
  return (
    <Price color={props.color} className={props.className}>
      {getFormattedPrice(props.children, props.currency)}
    </Price>
  );
};
