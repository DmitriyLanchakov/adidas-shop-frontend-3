import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from '../../../../styles/media';

const gray = '#3c3c3c';
const white = '#fff';

export default styled(Link)`
  font-family: 'AndaleMono';
  display: block;
  color: ${white};
  text-transform: uppercase;
  text-decoration: none;
  font-size: 42px;
  margin-bottom: 25px;
  ${media.tablet`
    font-size: 24px;
    color: ${props => (props.current ? white : gray)};
  `}

  &:hover {
    color: ${white};
  }
`;
