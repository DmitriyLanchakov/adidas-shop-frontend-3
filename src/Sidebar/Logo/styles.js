import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from '../../styles/media';

export const LogoLink = styled(Link)`
  display: block;
  ${media.tablet`
    margin: 50px 0 30px;

    &:hover {
      opacity: 0.8;
    }
  `}
`;

export const Logo = styled.img`
  object-fit: contain;
  box-sizing: border-box;
  width: 45px;
  ${media.tablet`
    width: 80px;
  `}
`;
