import React from 'react';
import styled from 'styled-components';
import media from '../../../styles/media';
import SingleImage from './SingleImage';

const Captions = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  ${media.tablet`
    justify-content: center;
  `}
`;

export default props => (
  <Captions>
    {props.images.map((image, index) => (
      <SingleImage
        src={image.src}
        isActive={index === props.active}
        key={image.id}
        onClick={() => props.onChange(index)}
      />
    ))}
  </Captions>
);
