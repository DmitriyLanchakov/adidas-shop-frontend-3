import styled from 'styled-components';
import media from '../../styles/media';
import Wrapper from './Wrapper';

export default styled(Wrapper)`
  position: static;
  padding: 20px 0;

  & > a {
    font-family: 'AndaleMono';
    margin-bottom: 25px;
  }
  
  ${media.tablet`
    margin: -15px 0 50px;
  `}
`;
