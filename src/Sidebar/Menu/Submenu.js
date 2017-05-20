import styled from 'styled-components';
import media from '../../styles/media';
import Wrapper from './Wrapper';

export default styled(Wrapper)`
  ${media.tablet`
    margin: -15px 0 50px;
    & > a {
      font-family: 'AndaleMono';
      margin-bottom: 25px;
    }
  `}
`;
