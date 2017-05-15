import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background: ${props => props.color || '#fff'};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 13px;
  transition-duration: 0.2s;

  & + button {
    margin-left: 12px;
  }

  & + span {
    margin-left: 29px;
  }

  &:hover {
    width: 20px;
    height: 20px;
    margin-left: 12px;
  }
`;

export default Button;
