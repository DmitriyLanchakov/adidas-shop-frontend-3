import styled from 'styled-components';
import media from '../../../styles/media';

const Button = styled.button`
  border: none;
  background: ${props => props.color || '#fff'};
  width: 4vw;
  height: 4vw;
  max-width: 25px;
  max-height: 25px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 7px;
  transition-duration: 0.2s;
  padding: 0;
  text-indent: -999em;
  overflow: hidden;

  ${media.tablet`
    width: 18px;
    height: 18px;
    &:hover {
      width: 20px;
      height: 20px;
      border-radius: 10px;
      margin: 0 6px;
    }
  `}
`;

export default Button;
