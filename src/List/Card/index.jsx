import React from 'react';
import { Wrapper, Container, StyledLink as Link, Image } from './styles';
import SaleLabel from '../../Components/SaleLabel';

export default props => (
  <Wrapper>
    <Container>
      <Image src={props.image} alt="Adidas Shoes 1" />
      <Link
        to={props.to}
        title="Single item page"
        sale={props.sale}
      >
        ${(props.price / 100).toFixed(2)}
      </Link>
      {props.sale && <SaleLabel className="sale">Sale</SaleLabel>}
    </Container>
  </Wrapper>
);
