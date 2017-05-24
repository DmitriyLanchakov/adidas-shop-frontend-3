import styled from 'styled-components';

const gray = '#3c3c3c';
const white = '#fff';

export default styled.button`
  margin: 0 auto;
  color: ${props => (props.isOpened ? white : gray)};
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  &:after {
    display: block;
    content: '';
    width: 6px;
    height: 6px;
    border: 5px solid;
    border-color: ${props => (props.isOpened ? white : gray)};
    border-left: none;
    border-top: none;
    border-radius: 3px;
    transform: ${props => (props.isOpened ? 'rotate(225deg)' : 'rotate(45deg)')};
    margin-left: 12px;
    transition-duration: 0.2s;
  }

  &:hover:after {
    border-color: ${white};
  }

  &:hover {
    color: ${white};
  }
`;
