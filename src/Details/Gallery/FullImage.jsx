import React from 'react';
import styled from 'styled-components';
import media from '../../styles/media';

const Image = styled.img`
  display: block;
  width: 100%;
  margin: 0 auto 35px;
  ${media.tablet`
    width: 80%;
  `}
`;

export default props => (
  <div>
    <Image src={props.src} alt="Adidas Shoe Ultra Boost Full" />
  </div>
);
