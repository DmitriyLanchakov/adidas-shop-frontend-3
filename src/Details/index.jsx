import React, { Component } from 'react';
import { Wrapper, Product } from './styles';
import Header from './Header';
import Gallery from './Gallery';
import Description from './Description';
import Button from './Button';
import get from '../functions/get';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {} };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.fetchData(newProps);
  }

  fetchData(props) {
    const { sport, group, id } = props.match.params;
    get(`${sport}/${group}/${id}`).then(product => this.setState({ product }));
  }

  render() {
    const { title, price, currency, images, description } = this.state.product;
    return (
      <Wrapper>
        <Product>
          <Header title={title} price={price} currency={currency} />
          <Gallery images={images} />
          <Description>{description}</Description>
        </Product>
        <Button>Buy now</Button>
      </Wrapper>
    );
  }
}

export default Details;
