import React from 'react';
import { Wrapper, Container, Image, StyledLink as Link } from './styles';
import Price from '../../Components/Price';
import SaleLabel from '../../Components/SaleLabel';

export default props => (
  <Wrapper>
    <Container>
      <Image src={props.image} alt={props.title} />
      <Link
        to={props.to}
        title={props.title}
        sale={props.sale}
      >
        <Price className="list" currency={props.currency}>{props.price}</Price>
      </Link>
      {props.sale && <SaleLabel className="sale">Sale</SaleLabel>}
    </Container>
  </Wrapper>
);
