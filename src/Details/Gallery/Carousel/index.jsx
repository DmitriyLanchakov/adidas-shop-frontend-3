import React from 'react';
import styled from 'styled-components';
import media from '../../../styles/media';
import Image from './Image';

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
      <Image
        id={image.id}
        fileName={image.fileName}
        size={128}
        isActive={index === props.active}
        key={image.id}
        onClick={() => props.onChange(index)}
      />
    ))}
  </Captions>
);
