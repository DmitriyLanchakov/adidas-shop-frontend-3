import styled from 'styled-components';
import { Link } from 'react-router-dom';

const gray = '#3c3c3c';
const white = '#fff';

export default styled(Link)`
  font-family: 'AndaleMono';
  display: block;
  color: ${props => (props.current ? white : gray)};
  text-transform: uppercase;
  text-decoration: none;
  font-size: 24px;
  margin-bottom: 25px; 

  &:hover {
    color: ${white};
  }
`;
