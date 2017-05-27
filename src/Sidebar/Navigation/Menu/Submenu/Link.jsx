import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import media from '../../../../styles/media';

const gray = '#3c3c3c';
const white = '#fff';

const Link = styled(NavLink)`
  font-family: 'AndaleMono';
  display: block;
  color: ${white};
  text-transform: uppercase;
  text-decoration: none;
  font-size: 9vw;
  margin-bottom: 25px;
  ${media.tablet`
    font-size: 24px;
    color: ${gray};
  `}

  &:hover,
  &.active {
    color: ${white};
  }
`;

export default props => (
  <Link
    to={props.to}
    title={props.title}
    activeClassName="active"
  >
    {props.children}
  </Link>
);
