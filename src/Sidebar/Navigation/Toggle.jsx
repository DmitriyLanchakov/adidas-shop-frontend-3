import React from 'react';
import styled from 'styled-components';
import media from '../../styles/media';

const Button = styled.button`
  background: none;
  border: none;
  height: 30px;
  ${media.tablet`
    display: none;
  `};
`;

const Span = styled.span`
  display: block;
  background: #fff;
  border: none;
  width: 40px;
  height: 4px;
  position: relative;
  transform: ${props => (props.isOpened ? 'rotate(45deg)' : 'none')};

  &:before,
  &:after {
    content: '';
    width: 40px;
    height: 4px;
    display: block;
    background: #fff;
    position: absolute;
    left: 0;
    transition: all 0.3s ease;
  }

  &:before {
    display: ${props => (props.isOpened ? 'none' : 'block')};
    bottom: 12px;
  }

  &:after {
    top: 12px;
    transform: ${props => (props.isOpened ? 'rotate(-90deg) translate(12px, 0px)' : 'none')};
  }
`;


export default props => (
  <Button onClick={props.onClick}>
    <Span isOpened={props.isOpened} />
  </Button>
);
