import styled from 'styled-components';
import media from '../../styles/media';

export default styled.nav`
  display: ${props => (props.opened ? 'block' : 'none')};
  position: absolute;
  left: 3%;
  width: 94%;
  top: 80px;
  background: #0e0e0e;
  z-index: 999;
  padding: 50px 0;
  font-size: 42px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  ${media.tablet`
    display: block;
    width: auto;
    padding: 0;
    position: static;
    text-align: center;
    font-size: 24px;
    align-items: center;
    margin-top: 150px;
    box-shadow: none;
  `}
`;
