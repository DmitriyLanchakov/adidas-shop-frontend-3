import styled from 'styled-components';
import { Link } from 'react-router-dom';

const gray = '#3c3c3c';
const white = '#fff';

export default styled(Link)`
  margin-bottom: 30px;
  color: ${gray};
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
    border: 5px solid ${gray};
    border-left: none;
    border-top: none;
    border-radius: 3px;
    transform: rotate(45deg);
    margin-left: 12px;
    transition-duration: 0.2s;
  }

  &.hasSubmenu:hover:after,
  &.hasSubmenu.opened:after {
    border-color: ${white};
  }

  &.hasSubmenu.opened:after {
    transform: rotate(225deg);
  }

  &:hover,
  &.opened,
  &.current {
    color: ${white};
  }

  & + nav {
    display: none;
  }

  &.opened + nav {
    display: block;
  }
`;
