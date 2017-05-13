import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';

export default () => (
  <Link to="/" className="logo" title="Adidas Online Shop">
    <img src={logo} alt="Adidas Logo" />
  </Link>
  );
