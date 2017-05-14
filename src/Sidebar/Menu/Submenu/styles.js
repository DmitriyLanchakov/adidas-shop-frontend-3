import styled from 'styled-components';
import Link from '../Link';
import media from '../../../styles/media';
import Wrapper from '../Wrapper';

export const SubLink = styled(Link)`
  font-family: 'AndaleMono';
  margin-bottom: 25px;
`;

export const Submenu = styled(Wrapper)`
  ${media.tablet`
    margin: -15px 0 50px;
  `}
`;
