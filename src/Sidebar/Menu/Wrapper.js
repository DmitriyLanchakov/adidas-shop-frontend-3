import styled from 'styled-components';
import media from '../../styles/media';

export default styled.nav`
  display: none;
  ${media.tablet`
    display: block;
    text-align: center;
    align-items: center;
    margin-top: 150px;
  `}
`;
