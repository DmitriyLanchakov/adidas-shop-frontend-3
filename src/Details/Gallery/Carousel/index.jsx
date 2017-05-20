import React from 'react';
import styled from 'styled-components';
import media from '../../../styles/media';
import SingleImage from './SingleImage';

import caption1 from './adidas-shoes-3_caption1.jpg';
import caption2 from './adidas-shoes-3_caption2.jpg';
import caption3 from './adidas-shoes-3_caption3.jpg';
import caption4 from './adidas-shoes-3.jpg';

const Captions = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  ${media.tablet`
    justify-content: center;
  `}

  & img:first-child {
    margin-left: 0;
  }

  & img:last-child {
    margin-right: 0;
  }
`;

export default () => (
  <Captions>
    <SingleImage src={caption1} alt="Adidas Shoe Ultra Boost" />
    <SingleImage src={caption2} alt="Adidas Shoe Ultra Boost" />
    <SingleImage src={caption3} alt="Adidas Shoe Ultra Boost" />
    <SingleImage src={caption4} alt="Adidas Shoe Ultra Boost" current />
    <SingleImage src={caption2} alt="Adidas Shoe Ultra Boost" />
  </Captions>
);
