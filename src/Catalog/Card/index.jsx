import React from 'react';
import { Wrapper, StyledLink, Image } from './styles';
import SaleLabel from '../../Components/SaleLabel';

export default props => (
  <Wrapper>
    <Image src={props.image} alt="Adidas Shoes 1" className="item-image" />
    <StyledLink to="/item" title="Single item page" sale={props.sale}>${props.price}</StyledLink>
    {props.sale && <SaleLabel className="sale">Sale</SaleLabel>}
  </Wrapper>
);
