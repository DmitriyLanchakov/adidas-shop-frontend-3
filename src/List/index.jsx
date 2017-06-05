/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Catalog, Heading, StyledGrid as Grid } from './styles';
import Card from './Card';
import Filter from './Filter';
import getImageLink from '../functions/getImageLink';
import get from '../functions/get';

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
    get(`${sport}/${group}`).then(json => this.setState({ products: json.items }));
  }

  render() {
    const { sport, group } = this.props.match.params;
    return (
      <Catalog>
        <Heading>{`Adidas ${sport} ${group} catalog`}</Heading>
        <Filter />
        <Grid fluid>
          <Row>
            {this.state.products.map(product => (
              <Col xs={12} sm={6} md={4} key={product.id}>
                <Card
                  to={`${this.props.match.url}/${product.id}`}
                  image={getImageLink(product.images[0].id, product.images[0].fileName, 256)}
                  price={product.price}
                  currency={product.currency}
                  title={product.title}
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
