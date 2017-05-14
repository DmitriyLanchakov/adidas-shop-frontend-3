import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from '../../styles/media';

export const LogoLink = styled(Link)`
  display: block;
  margin: 6px;
  ${media.tablet`
    margin: 30px;

    &:hover {
      opacity: 0.8;
    }
  `}
`;

export const Logo = styled.img`
  object-fit: contain;
  box-sizing: border-box;
  padding: 10px;
  width: 52px;
  ${media.tablet`
    padding: 10px;
    width: 94px;
  `}
`;
