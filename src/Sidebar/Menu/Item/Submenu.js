import styled from 'styled-components';
import media from '../../../styles/media';
import Wrapper from '../Wrapper';
import Link from './Link';

export const Submenu = styled(Wrapper)`
  position: static;
  width: auto;
  padding: 0;
  margin: 50px 0;
  ${media.tablet`
    margin: -15px 0 50px;
  `}
`;

export const SubLink = styled(Link)`
  font-family: 'AndaleMono';
  margin-bottom: 25px;
`;
