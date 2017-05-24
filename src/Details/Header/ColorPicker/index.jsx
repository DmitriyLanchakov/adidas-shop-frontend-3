import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import media from '../../../styles/media';

const ColorPicker = styled.div`
  font-size: 0;
  order: 2;
  ${media.tablet`
    order: 1;
  `}
`;

const colors = [
  '#c5c5c5',
  '#4d87ca',
  '#000',
  '#e0e0e0',
];

export default props => (
  <ColorPicker>
    {colors.map(color => (
      <Button color={color} onClick={() => props.onChange(color)} />
    ))}
  </ColorPicker>
);
