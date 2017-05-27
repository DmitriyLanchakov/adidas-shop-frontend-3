import styled from 'styled-components';
import media from '../styles/media';

const Label = styled.span`
  display: block;
  position: ${props => (props.static ? 'static' : 'absolute')};
  top: 17px;
  right: 17px;
  padding: 7px 20px;
  background: #ff5c5c;
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
  ${media.tablet`
    font-size: 14px;
    padding: 7px 20px;
    margin-left: 30px;
    order: 2;
  `}
`;

export default Label;
