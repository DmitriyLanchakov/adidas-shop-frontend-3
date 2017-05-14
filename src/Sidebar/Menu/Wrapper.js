import styled from 'styled-components';
import media from '../../styles/media';

export default styled.nav`
  display: none;
  ${media.tablet`
    display: block;
    text-align: center;
    font-size: 24px;
    align-items: center;
    margin-top: 150px;
  `}
`;
