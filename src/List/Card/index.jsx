import React from 'react';
import { Wrapper, Container, StyledLink as Link, Image } from './styles';
import SaleLabel from '../../Components/SaleLabel';
import getFormattedPrice from '../../functions/getFormattedPrice';

export default props => (
  <Wrapper>
    <Container>
      <Image src={props.image} alt="Adidas Shoes 1" />
      <Link
        to={props.to}
        title="Single item page"
        sale={props.sale}
      >
        {getFormattedPrice(props.price, '$')}
      </Link>
      {props.sale && <SaleLabel className="sale">Sale</SaleLabel>}
    </Container>
  </Wrapper>
);
