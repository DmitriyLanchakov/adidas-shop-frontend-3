import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../../../styles/media';
import SingleImage from './SingleImage';

const Captions = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  ${media.tablet`
    justify-content: center;
  `}
`;

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { id: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState({ id });
    this.props.handleImageChange(id);
  }

  render() {
    return (
      <Captions>
        {this.props.images.map(image => (
          <SingleImage
            src={image.src}
            alt={image.title}
            current={image.id === this.state.id}
            key={image.id}
            onClick={() => this.handleClick(image.id)}
          />
        ))}
      </Captions>
    );
  }
}

export default Carousel;
/*
export default () => (
  <Captions>
    <SingleImage src={caption1} alt="Adidas Shoe Ultra Boost" />
    <SingleImage src={caption2} alt="Adidas Shoe Ultra Boost" />
    <SingleImage src={caption3} alt="Adidas Shoe Ultra Boost" />
    <SingleImage src={caption4} alt="Adidas Shoe Ultra Boost" current />
    <SingleImage src={caption2} alt="Adidas Shoe Ultra Boost" />
  </Captions>
);
*/
