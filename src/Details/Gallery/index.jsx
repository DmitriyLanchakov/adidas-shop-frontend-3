import React, { Component } from 'react';
import FullImage from './FullImage';
import Carousel from './Carousel';

const getImage = (id, fileName, height) => (
   `http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${id}/zoom/${fileName}?sh=${height}`
);

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
    const { id, fileName } = this.props.images[this.state.selectedIndex];
    return (
      <div>
        <FullImage src={getImage(id, fileName, 1024)} />
        <Carousel
          onChange={this.handleChangeImage}
          images={this.props.images}
          active={this.state.selectedIndex}
        />
      </div>
    );
  }
}

export default Gallery;
