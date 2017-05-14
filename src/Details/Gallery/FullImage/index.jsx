import React from 'react';
import styled from 'styled-components';
import media from '../../../styles/media';
import imageSrc from './adidas-shoes-3@3x.jpg';

const Image = styled.img`
  display: block;
  width: 100%;
  margin: 0 auto 35px;
  ${media.tablet`
    width: 80%;
  `}
`;

export default () => (
  <div>
    <Image src={imageSrc} alt="Adidas Shoe Ultra Boost Full" />
    <br />
  </div>
);
