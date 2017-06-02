import React, { Component } from 'react';
import { Wrapper, Product } from './styles';
import Header from './Header';
import Gallery from './Gallery';
import Description from './Description';
import Button from './Button';

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
    fetch(`/v1/products/${sport}/${group}/${id}`)
      .then(response => response.json())
      .then(product => this.setState({ product }));
  }

  render() {
    return (
      <Wrapper>
        <Product>
          <Header title={this.state.product.title} price={this.state.product.price} />
          <Gallery images={this.state.product.images} />
          <Description>{this.state.product.description}</Description>
        </Product>
        <Button>Buy now</Button>
      </Wrapper>
    );
  }
}

export default Details;
