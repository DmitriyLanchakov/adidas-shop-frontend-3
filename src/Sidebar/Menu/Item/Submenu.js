import styled from 'styled-components';
import media from '../../../styles/media';
import Wrapper from '../Wrapper';
import Link from './Link';

export const Submenu = styled(Wrapper)`
  display: block;
  position: static;
  width: auto;
  padding: 0;
  margin: ${props => (props.opened ? '50px 0' : '0')};
  overflow: hidden;
  max-height: ${props => (props.opened ? '200px' : '0')};
  ${media.tablet`
    margin: ${props => (props.opened ? '-15px 0 50px' : '-15px 0 0 0')};
  `}
`;

export const SubLink = styled(Link)`
  font-family: 'AndaleMono';
  margin-bottom: 25px;
`;
