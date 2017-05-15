import styled from 'styled-components';
import media from '../../../styles/media';

const Image = styled.img`
  width: 16%;
  box-sizing: border-box;
  outline: ${props => (props.current ? '5px solid #e8e8ea' : '5px solid #fff')};
  cursor: pointer;
  margin: 0 5px;
  ${media.tablet`
    margin: 0 14px;
  `}

  &:hover {
    outline: 5px solid #e8e8ea;
  }
`;

export default Image;
