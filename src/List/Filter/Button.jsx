import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background: none;
  font-size: 24px;
  color: ${props => (props.current ? '#4d42f8' : '#d6d6d6')};
  text-transform: uppercase;
  padding: ${props => (props.children.toLowerCase === 'men' ? '0 10px 0 0' : '0 3px')};
  padding: 0 3px;
  cursor: pointer;

  &:hover{
    color: #4d42f8;
  }
`;
export default Button;
