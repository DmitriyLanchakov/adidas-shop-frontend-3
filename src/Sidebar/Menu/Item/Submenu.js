import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from '../../../styles/media';
import Wrapper from '../Wrapper';

const gray = '#3c3c3c';
const white = '#fff';

export const Submenu = styled(Wrapper)`
  ${media.tablet`
    margin: -15px 0 50px;
  `}
`;

export const SubLink = styled(Link)`
  margin-bottom: 25px;
  font-family: 'AndaleMono';
  display: block;
  color: ${props => (props.current ? white : gray)};
  text-transform: uppercase;
  text-decoration: none;
  font-size: 24px;

  &:hover {
    color: ${white};
  }
`;
