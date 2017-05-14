import React from 'react';
import logo from './logo.png';
import { LogoLink, Logo } from './styles';

export default () => (
  <LogoLink to="/" title="Adidas Online Shop">
    <Logo src={logo} alt="Adidas Logo" />
  </LogoLink>
);
