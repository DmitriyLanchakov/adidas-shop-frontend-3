import styled from 'styled-components';
import media from '../../../../styles/media';

export default styled.nav`
  display: block;
  text-align: center;
  align-items: center;
  margin: 50px 0;
  ${media.tablet`
    margin: 15px 0 50px;
  `}
`;
