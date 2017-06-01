/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Catalog, Heading, StyledGrid as Grid } from './styles';
import Card from './Card';
import Filter from './Filter';
import getImage from '../functions/getImage';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.fetchData(newProps);
  }

  fetchData(props) {
    const { sport, group } = props.match.params;
    fetch(`/v1/products/${sport}/${group}`)
      .then(response => response.json())
      .then(json => this.setState({ products: json.items }));
  }

  render() {
    return (
      <Catalog>
        <Heading>Items Catalog</Heading>
        <Filter />
        <Grid fluid>
          <Row>
            {this.state.products.map(product => (
              <Col xs={12} sm={6} md={4} key={product.id}>
                <Card
                  to={`${this.props.match.url}/${product.id}`}
                  image={getImage(product.images[0].id, product.images[0].fileName, 256)}
                  price={product.price}
                />
              </Col>
            ))}
          </Row>
        </Grid>
      </Catalog>
    );
  }
}

export default List;
