import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Card from './Card';
import Filter from './Filter';
import shoesImage1 from './adidas-shoes-1.jpg';
import shoesImage2 from './adidas-shoes-2.jpg';
import shoesImage3 from './adidas-shoes-3.jpg';
import './Catalog.css';

const Catalog = styled.main`
  flex: 1;
`;

const Heading = styled.h2`
  display: none;
`;

const StyledGrid = styled(Grid)`
  padding: 22px 24px;
`;

export default () => (
  <Catalog>
    <Heading>Items Catalog</Heading>
    <Filter />
    <StyledGrid fluid>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card image={shoesImage1} price="170" sale />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card image={shoesImage2} price="240.99" sale />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card image={shoesImage3} price="1024" />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card image={shoesImage2} price="240.99" />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card image={shoesImage3} price="1024" />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card image={shoesImage1} price="170" sale />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card image={shoesImage1} price="170" sale />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card image={shoesImage2} price="240.99" sale />
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Card image={shoesImage3} price="1024" />
        </Col>
      </Row>
    </StyledGrid>
  </Catalog>
);
