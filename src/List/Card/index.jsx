import React from 'react';
import { Wrapper, Container, StyledLink, Image } from './styles';
import SaleLabel from '../../Components/SaleLabel';

export default props => (
  <Wrapper>
    <Container>
      <Image src={props.image} alt="Adidas Shoes 1" />
      <StyledLink to="/item" title="Single item page" sale={props.sale}>${props.price}</StyledLink>
      {props.sale && <SaleLabel className="sale">Sale</SaleLabel>}
    </Container>
  </Wrapper>
);
