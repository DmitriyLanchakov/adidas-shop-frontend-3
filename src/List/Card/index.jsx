import React from 'react';
import { Wrapper, Container, StyledLink as Link, Image } from './styles';
import SaleLabel from '../../Components/SaleLabel';
import getFormatedPrice from '../../functions/getFormatedPrice';

export default props => (
  <Wrapper>
    <Container>
      <Image src={props.image} alt="Adidas Shoes 1" />
      <Link
        to={props.to}
        title="Single item page"
        sale={props.sale}
      >
        {getFormatedPrice(props.price)}
      </Link>
      {props.sale && <SaleLabel className="sale">Sale</SaleLabel>}
    </Container>
  </Wrapper>
);
