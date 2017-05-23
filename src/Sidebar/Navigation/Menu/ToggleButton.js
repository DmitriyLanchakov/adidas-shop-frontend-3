import styled from 'styled-components';
import media from '../../styles/media';

export const ToggleWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 30px;
  justify-content: center;
  ${media.tablet`
    display: none;
  `};
`;

export const Toggle = styled.button`
  background: #fff;
  border: none;
  width: 50px;
  height: 4px;
  position: relative;
  transform: ${props => (props.opened ? 'rotate(45deg)' : 'none')};

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
    display: ${props => (props.opened ? 'none' : 'block')};
    bottom: 12px;
  }

  &:after {
    top: 12px;
    transform: ${props => (props.opened ? 'rotate(-90deg) translate(12px, 0px)' : 'none')};
  }
`;
