import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from '../../../styles/media';

const gray = '#3c3c3c';
const white = '#fff';

export default styled(Link)`
  color: ${white};
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  ${media.tablet`
    color: ${props => (props.opened || props.current ? white : gray)};
  `};

  &:after {
    display: ${props => (props.hasSubmenu ? 'block' : 'none')};
    content: '';
    width: 6px;
    height: 6px;
    border: 5px solid;
    border-color: ${white};
    border-left: none;
    border-top: none;
    border-radius: 3px;
    transform: ${props => (props.opened ? 'rotate(225deg)' : 'rotate(45deg)')};
    margin-left: 12px;
    transition-duration: 0.2s;
    ${media.tablet`
      border-color: ${props => (props.opened ? white : gray)};
    `};
  }

  &:hover:after {
    border-color: ${white};
  }

  &:hover {
    color: ${white};
  }
`;
