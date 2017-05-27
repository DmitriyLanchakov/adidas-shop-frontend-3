import React from 'react';
import styled from 'styled-components';
import media from '../../../styles/media';

const rotation = props => (props.isOpened ? 'rotate(225deg)' : 'rotate(45deg)');

const Wrapper = styled.span`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  max-width: 100%;
  &:hover span {
    transform: translateX(5px) ${rotation};
  }
  ${media.tablet`
    max-width: auto;
  `};
`;

const Button = styled.button`
  display: inline;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  background: none;
  border: none;
  font-size: 9vw;
  cursor: pointer;
  width: auto;
  margin: 0;
  padding: 0;
  ${media.tablet`
    font-size: 24px;
    max-width: auto;
  `}
`;
const Arrow = styled.span`
  display: block;
  content: '';
  width: 6px;
  height: 6px;
  border: 5px solid;
  border-color: #fff;
  border-left: none;
  border-top: none;
  border-radius: 30%;
  transform: ${rotation};
  margin-left: 12px;
  transition-duration: 0.2s;
  ${media.tablet`
    font-size: 24px;
  `}

  &:hover {
    border-color: #fff;
    color: #fff;
    transform: translateX(5px) ${rotation};
  }
`;

export default props => (
  <Wrapper onClick={props.onClick} isOpened={props.isOpened}>
    <Button>{props.children}</Button>
    <Arrow isOpened={props.isOpened} />
  </Wrapper>
);
