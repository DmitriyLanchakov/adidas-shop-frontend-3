import React, { Component } from 'react';
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
  margin: 0 -5px;
  ${media.tablet`
    justify-content: center;
    margin: 0 -7px;
  `}
`;

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [
      { id: 1, src: caption1, title: 'Adidas Shoes Ultra Boost caption1', current: false },
      { id: 2, src: caption2, title: 'Adidas Shoes Ultra Boost caption2', current: false },
      { id: 3, src: caption3, title: 'Adidas Shoes Ultra Boost caption3', current: false },
      { id: 4, src: caption4, title: 'Adidas Shoes Ultra Boost caption4', current: false },
      { id: 5, src: caption2, title: 'Adidas Shoes Ultra Boost caption2', current: false },
    ] };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.handleClick(1);
  }

  handleClick(id) {
    const newImages = [];
    let src = null;

    this.state.images.forEach((item) => {
      const newItem = item;
      newItem.current = false;
      if (newItem.id === id) {
        newItem.current = true;
        src = newItem.src;
      }
      newImages.push(newItem);
    });

    this.setState({
      images: newImages,
    });

    this.props.handleImageChange(src);
  }

  render() {
    return (
      <Captions>
        {this.state.images.map(item => (
          <SingleImage
            src={item.src}
            alt={item.title}
            current={item.current}
            key={item.id}
            onClick={() => this.handleClick(item.id)}
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
