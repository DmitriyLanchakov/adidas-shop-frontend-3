import React from 'react';
import styled from 'styled-components';
import media from '../../styles/media';
import Menu from './Wrapper';
import Item from './Item';

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`
    display: block;
  `};
`;

const Toggle = styled.button`
  background: #fff;
  border: none;
  width: 50px;
  height: 4px;
  position: relative;

  &.opened {
    transform: rotate(45deg);
  }

  &:before,
  &:after {
    content: '';
    width: 50px;
    height: 4px;
    display: block;
    background: #fff;
    position: absolute;
    left: 0;
    transition: all 0.3s ease;
  }

  &:before {
    bottom: 10px;;
  }

  &.opened:before {
    display: none;
  }

  &:after {
    top: 10px;
  }

  &.opened:after {
    transform: rotate(-90deg) translate(10px, 1px);
  }

  ${media.tablet`
    display: none;
  `};
`;

export default () => (
  <div>
    <ToggleWrapper>
      <Toggle />
    </ToggleWrapper>
    <Menu>
      <Item to="#" title="Footbal" hasSubmenu />
      <Item to="#" title="Running" hasSubmenu />
      <Item to="#" title="Basketball" hasSubmenu />
    </Menu>
  </div>
);
