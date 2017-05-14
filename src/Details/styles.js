import styled from 'styled-components';
import media from '../styles/media';

export const Wrapper = styled.main`
  flex: 1;
  margin-bottom: 50px;
  ${media.tablet`
    margin-bottom: 103px;
  `}
`;

export const Product = styled.div`
  padding: 30px 15px;
  ${media.tablet`
    padding: 15px 31px 31px;
  `}
`;
