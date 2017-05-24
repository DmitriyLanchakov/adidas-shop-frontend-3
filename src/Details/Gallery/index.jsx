import React, { Component } from 'react';
import FullImage from './FullImage';
import Carousel from './Carousel';

import caption1 from './img/adidas-shoes-3_caption1.jpg';
import caption2 from './img/adidas-shoes-3_caption2.jpg';
import caption3 from './img/adidas-shoes-3_caption3.jpg';
import caption4 from './img/adidas-shoes-3.jpg';

const images = [
  { src: caption1, title: 'Adidas Shoes Ultra Boost caption1' },
  { src: caption2, title: 'Adidas Shoes Ultra Boost caption2' },
  { src: caption3, title: 'Adidas Shoes Ultra Boost caption3' },
  { src: caption4, title: 'Adidas Shoes Ultra Boost caption4' },
  { src: caption2, title: 'Adidas Shoes Ultra Boost caption5' },
];

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.changeFullImage = this.changeFullImage.bind(this);
  }

  changeFullImage(index) {
    this.setState({ index });
  }

  render() {
    return (
      <div>
        <FullImage src={images[this.state.index].src} />
        <Carousel onChange={this.changeFullImage} images={images} active={this.state.index} />
      </div>
    );
  }
}

export default Gallery;
