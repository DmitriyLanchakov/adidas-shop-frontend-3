/* eslint react/prop-types: 0 */

import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Catalog, Heading, StyledGrid as Grid } from './styles';
import Card from './Card';
import Filter from './Filter';
import shoesImage1 from './adidas-shoes-1.jpg';
import shoesImage2 from './adidas-shoes-2.jpg';
import shoesImage3 from './adidas-shoes-3.jpg';

const cards = [
  { id: 1, image: shoesImage1, price: 170, sale: true },
  { id: 2, image: shoesImage2, price: 240.99, sale: true },
  { id: 3, image: shoesImage3, price: 1024, sale: false },
  { id: 4, image: shoesImage2, price: 240.99, sale: false },
  { id: 5, image: shoesImage3, price: 1024, sale: false },
  { id: 6, image: shoesImage1, price: 170, sale: true },
  { id: 7, image: shoesImage1, price: 170, sale: true },
  { id: 8, image: shoesImage2, price: 240.99, sale: true },
  { id: 9, image: shoesImage1, price: 170, sale: false },
];

export default ({ match }) => (
  <Catalog>
    <Heading>Items Catalog</Heading>
    <Filter />
    <Grid fluid>
      <Row>
        {cards.map(card => (
          <Col xs={12} sm={6} md={4} key={card.id}>
            <Card
              image={card.image}
              price={card.price}
              sale={card.sale}
              url={match.url}
              id={card.id}
            />
          </Col>
        ))}
      </Row>
    </Grid>
  </Catalog>
);
