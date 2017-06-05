import React, { Component } from 'react';
import FullImage from './FullImage';
import Carousel from './Carousel';
import getImageLink from '../../functions/getImageLink';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0 };
    this.handleChangeImage = this.handleChangeImage.bind(this);
  }

  handleChangeImage(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    if (!this.props.images) return false;
    return (
      <div>
        <FullImage
          src={getImageLink(this.props.images[this.state.selectedIndex].id,
            this.props.images[this.state.selectedIndex].fileName, 1024)}
        />
        <Carousel
          images={this.props.images}
          active={this.state.selectedIndex}
          onChange={this.handleChangeImage}
        />
      </div>
    );
  }
}

export default Gallery;
