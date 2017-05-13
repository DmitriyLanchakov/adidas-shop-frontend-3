import React from 'react';
import SingleImage from './SingleImage';
import MoreLabel from './MoreLabel';
import MoreButton from './MoreButton';

import caption1 from './adidas-shoes-3_caption1.jpg';
import caption2 from './adidas-shoes-3_caption2.jpg';
import caption3 from './adidas-shoes-3_caption3.jpg';
import caption4 from './adidas-shoes-3.jpg';

export default () => (
  <div className="product-image-captions">
    <SingleImage src={caption1} />
    <SingleImage src={caption2} />
    <SingleImage src={caption3} />
    <SingleImage src={caption4} current />
    <MoreLabel />
    <MoreButton />
  </div>
  );
