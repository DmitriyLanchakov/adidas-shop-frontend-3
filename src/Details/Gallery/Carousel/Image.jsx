import React from 'react';
import styled from 'styled-components';
import media from '../../../styles/media';
import getImageLink from '../../../functions/getImageLink';

const Image = styled.img`
  width: 16%;
  box-sizing: border-box;
  outline: ${props => (props.isActive ? '5px solid #e8e8ea' : '5px solid #fff')};
  cursor: pointer;
  margin: 0 5px 10px;
  ${media.tablet`
    margin: 0 7px 15px;
  `}

  &:hover {
    outline: 5px solid #e8e8ea;
  }
`;

export default props => (
  <Image
    src={getImageLink(props.id, props.fileName, props.size)}
    isActive={props.isActive}
    onClick={props.onClick}
  />
);
