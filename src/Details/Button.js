import styled from 'styled-components';
import media from '../styles/media';

const Button = styled.button`
  width: 100%;
  font-size: 20px;
  color: #fff;
  padding: 23px 0;
  text-align: center;
  border: none;
  cursor: pointer;
  background-image: linear-gradient(to right, #4949aa, #27275d);
  transition: none;
  position: fixed;
  bottom: 0;
  right: 0;
  ${media.tablet`
    width: calc(100% - 327px);
    font-size: 32px;
    padding: 36px 0;
  `}
  ${media.desktop`
    width: calc(100% - 414px);
  `}

  &:hover {
    background-image: linear-gradient(to top, #4949aa, #27275d);
  }
`;

export default Button;
