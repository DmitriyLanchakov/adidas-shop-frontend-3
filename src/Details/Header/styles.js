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
    max-height: 40px;
  `}
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.h1`
  font-size: 36px;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  ${media.tablet`
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
  ${media.tablet`
    order: 1;
    justify-content: flex-end;
    width: auto;
  `}
`;

export const Price = styled.h2`
  font-size: 80px;
  padding: 0;
  margin: 0;
  color: #e2e2e2;
  font-weight: 400;
  order: 1;
  ${media.tablet`
    padding: 10px 0;
    margin: 20px 0;
    order: 2;
  `}
`;

export const Break = styled.br`
  display: none;
  ${media.tablet`
    display: inline;
  `}
`;