import styled from 'styled-components';
import media from '../../styles/media';

export const Header = styled.header`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  z-index: 10;
  max-height: 100%;
  ${media.tablet`
    flex-flow: row nowrap;
    max-height: 200px;
  `}
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.h1`
  font-size: 9vw;
  font-weight: 400;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  max-width: 100%;
  ${media.tablet`
    max-width: 500px;
    font-size: 64px;
  `}
`;

export const Additional = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  width: 100%;
  ${media.tablet`
    align-items: flex-end;
    margin-top: 16px;
    width: auto;
  `}
`;

export const Options = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  order: 2;
  width: 100%;
  margin-top: 15px;
  ${media.tablet`
    margin: 0;
    order: 1;
    justify-content: flex-end;
    width: auto;
  `}
`;

export const Price = styled.h2`
  font-size: 19vw;
  padding: 0;
  margin: 0;
  color: ${props => props.color};
  font-weight: 400;
  order: 1;
  ${media.tablet`
    font-size: 80px;
    padding: 10px 0;
    margin: 20px 0;
    order: 2;
  `}
`;
