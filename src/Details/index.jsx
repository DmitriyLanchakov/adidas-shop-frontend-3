import React from 'react';
import { Wrapper, Product } from './styles';
import Header from './Header';
import Gallery from './Gallery';
import Description from './Description';
import Button from './Button';
import './Details.css';

export default () => (
  <Wrapper>
    <Product>
      <Header />
      <Gallery />
      <Description />
    </Product>
    <Button>Buy now</Button>
  </Wrapper>
);
