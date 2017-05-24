import styled from 'styled-components';
import media from '../../styles/media';

export const Paragraph = styled.p`
  font-family: 'AvenirNextReg';
  font-weight: 800;
  font-size: 20px;
  line-height: 1.5;
  color: #d8d8d8;
  margin-bottom: 0;
  padding:0;
  margin-top: 40px;
  ${media.tablet`
    font-size: 33px;
  `}
`;

export const FirstWord = styled.span`
  font-family: 'AvenirNextReg';
  color: #6e6e6e;
`;
