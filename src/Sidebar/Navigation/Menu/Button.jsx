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
  &:hover span {
    transform: translateX(5px) ${rotation};
  }
`;

const Button = styled.button`
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  background: none;
  border: none;
  font-size: 42px;
  cursor: pointer;
  ${media.tablet`
    font-size: 24px;
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
  border-radius: 3px;
  transform: ${rotation};
  margin-left: 5px;
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
