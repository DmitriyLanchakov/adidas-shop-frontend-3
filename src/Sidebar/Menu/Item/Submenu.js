import styled from 'styled-components';
import media from '../../../styles/media';
import Link from './Link';

export const Submenu = styled.nav`
  margin: ${props => (props.opened ? '50px 0' : '0')};
  overflow: hidden;
  max-height: ${props => (props.opened ? '200px' : '0')};
  ${media.tablet`
    margin: ${props => (props.opened ? '15px 0 20px' : '0')};
  `}
`;

export const SubLink = styled(Link)`
  font-family: 'AndaleMono';
  margin-bottom: 25px;
`;
