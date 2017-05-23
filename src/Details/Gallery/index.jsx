import React, { Component } from 'react';
import FullImage from './FullImage';
import Carousel from './Carousel';

import caption1 from './img/adidas-shoes-3_caption1.jpg';
import caption2 from './img/adidas-shoes-3_caption2.jpg';
import caption3 from './img/adidas-shoes-3_caption3.jpg';
import caption4 from './img/adidas-shoes-3.jpg';

const images = [
  { id: 1, src: caption1, title: 'Adidas Shoes Ultra Boost caption1' },
  { id: 2, src: caption2, title: 'Adidas Shoes Ultra Boost caption2' },
  { id: 3, src: caption3, title: 'Adidas Shoes Ultra Boost caption3' },
  { id: 4, src: caption4, title: 'Adidas Shoes Ultra Boost caption4' },
  { id: 5, src: caption2, title: 'Adidas Shoes Ultra Boost caption2' },
];

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { id: 1 };
    this.changeFullImage = this.changeFullImage.bind(this);
  }

  getFullImageSrc() {
    let fullImage = null;

    images.forEach((image) => {
      if (image.id === this.state.id) {
        fullImage = image.src;
      }
    });

    return fullImage;
  }

  changeFullImage(id) {
    this.setState({ id });
  }

  render() {
    return (
      <div>
        <FullImage src={this.getFullImageSrc()} />
        <Carousel handleImageChange={this.changeFullImage} images={images} />
      </div>
    );
  }
}

export default Gallery;
