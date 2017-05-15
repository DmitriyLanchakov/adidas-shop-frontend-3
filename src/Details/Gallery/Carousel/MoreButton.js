import styled from 'styled-components';
import media from '../../../styles/media';

const Button = styled.button`
  display: none;
  ${media.tablet`
    display: inline-block;
  `}
`;

export default Button;

/*  ${media.tablet`
    display: block;
    border: none;
    background: none;
    font-family: 'AvenirNextReg';
    color: #c0c0c0;
    font-size: 14px;
    text-align: left;
    cursor: pointer;
    width: 64px;
    flex: 0 1 40px;

    &:hover {
      color: #6e6e6e;
    }
  `}*/
