/* eslint react/prop-types: 0 */

import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Catalog, Heading, StyledGrid } from './styles';
import Card from './Card';
import Filter from './Filter';
import shoesImage1 from './adidas-shoes-1.jpg';
import shoesImage2 from './adidas-shoes-2.jpg';
import shoesImage3 from './adidas-shoes-3.jpg';

const CardCol = ({ children }) => (
  <Col xs={12} sm={6} md={4} lg={3}>
    {children}
  </Col>
);


export default () => (
  <Catalog>
    <Heading>Items Catalog</Heading>
    <Filter />
    <StyledGrid fluid>
      <Row>
        <CardCol>
          <Card image={shoesImage1} price="170" sale />
        </CardCol>

        <CardCol>
          <Card image={shoesImage2} price="240.99" sale />
        </CardCol>

        <CardCol>
          <Card image={shoesImage3} price="1024" />
        </CardCol>

        <CardCol>
          <Card image={shoesImage2} price="240.99" />
        </CardCol>

        <CardCol>
          <Card image={shoesImage3} price="1024" />
        </CardCol>

        <CardCol>
          <Card image={shoesImage1} price="170" sale />
        </CardCol>

        <CardCol>
          <Card image={shoesImage1} price="170" sale />
        </CardCol>

        <CardCol>
          <Card image={shoesImage2} price="240.99" sale />
        </CardCol>

        <CardCol>
          <Card image={shoesImage3} price="1024" />
        </CardCol>
      </Row>
    </StyledGrid>
  </Catalog>
);
