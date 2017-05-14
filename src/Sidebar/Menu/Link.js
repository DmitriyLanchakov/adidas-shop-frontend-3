import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  margin-bottom: 30px;
  color: ${props => (props.opened || props.current ? '#fff' : '#3c3c3c')};
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  &:after {
    display: ${props => (props.hasSubmenu ? 'block' : 'none')};
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

  &:hover:after {
    transform: ${props => (props.opened ? 'rotate(225deg)' : '')};
  }

  &:hover {
    color: #fff;
  }
`;
