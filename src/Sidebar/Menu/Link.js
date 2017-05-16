import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  margin-bottom: 30px;
  color: #3c3c3c;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  &.hasSubmenu:after {
    display: block;
    content: '';
    width: 6px;
    height: 6px;
    border: 3px solid #fff;
    border-left: none;
    border-top: none;
    border-radius: 3px;
    transform: rotate(45deg);
    margin-left: 12px;
    transition-duration: 0.2s;
  }

  &.hasSubmenu.opened:hover:after {
    transform: rotate(225deg);
  }

  &:hover,
  &.opened,
  &.current {
    color: #fff;
  }
`;
