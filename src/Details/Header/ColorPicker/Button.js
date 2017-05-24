import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background: ${props => props.color || '#fff'};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 7px;
  transition-duration: 0.2s;

  &:hover {
    width: 20px;
    height: 20px;
    margin: 0 6px;
  }
`;

export default Button;
