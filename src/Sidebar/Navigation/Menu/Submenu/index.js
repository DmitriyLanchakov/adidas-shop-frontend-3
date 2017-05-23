import styled from 'styled-components';
import media from '../../../../styles/media';

export default styled.nav`
  margin: 50px 0;
  display: block;
  width: auto;
  padding: 0;
  position: static;
  text-align: center;
  align-items: center;
  box-shadow: none;
  ${media.tablet`
    margin: 15px 0 50px;
    display: block;
    width: auto;
    padding: 0;
    position: static;
    text-align: center;
    align-items: center;
    box-shadow: none;
  `}
`;
