import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import media from '../styles/media';

export const Catalog = styled.main`
  flex: 1;
`;

export const Heading = styled.h2`
  display: none;
`;

export const StyledGrid = styled(Grid)`
  padding: 15px;
  ${media.tablet`
    padding: 22px 24px;
  `}
`;
