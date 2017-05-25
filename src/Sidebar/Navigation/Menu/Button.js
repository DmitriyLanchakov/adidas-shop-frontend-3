import styled from 'styled-components';
import media from '../../../styles/media';

const rotation = props => (props.isOpened ? 'rotate(225deg)' : 'rotate(45deg)');

export default styled.button`
  margin: 0 auto;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  font-size: 42px;
  cursor: pointer;
  ${media.tablet`
    font-size: 24px;
  `}

  &:after {
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
    margin-left: 12px;
    transition-duration: 0.2s;
    ${media.tablet`
      font-size: 24px;
    `}
  }

  &:hover:after {
    border-color: #fff;
    transform: translateX(5px) ${rotation};
  }

  &:hover {
    color: #fff;
  }
`;
