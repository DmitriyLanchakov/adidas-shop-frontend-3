import React from 'react';
import styled from 'styled-components';
import media from '../../../styles/media';
import SingleImage from './SingleImage';
import getImageLink from '../../../functions/getImageLink';

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
        src={getImageLink(image.id, image.fileName, 128)}
        isActive={index === props.active}
        key={image.id}
        onClick={() => props.onChange(index)}
      />
    ))}
  </Captions>
);
