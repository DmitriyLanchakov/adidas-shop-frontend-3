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

export default () => (
  <ColorPicker>
    <Button color="#c5c5c5" />
    <Button color="#4d87ca" />
    <Button color="#000" />
    <Button color="#e0e0e0" />
  </ColorPicker>
  );
