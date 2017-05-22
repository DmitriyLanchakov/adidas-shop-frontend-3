import React, { Component } from 'react';
import FullImage from './FullImage';
import Carousel from './Carousel';


class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { fullImage: null };
    this.changeFullImage = this.changeFullImage.bind(this);
  }

  changeFullImage(img) {
    this.setState({
      fullImage: img,
    });
  }

  render() {
    return (
      <div>
        <FullImage src={this.state.fullImage} />
        <Carousel handleImageChange={this.changeFullImage} />
      </div>
    );
  }
}

export default Gallery;
