import styled from 'styled-components';
import media from '../../styles/media';
import icon from './filter.png';

export const Filter = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  padding: 15px;
  align-content: flex-start;
  align-items: flex-start;
  border-bottom: 3px solid #e7e7e7;
  ${media.tablet`
    flex-flow: row nowrap;
    padding: 11px 24px;
  `}
`;

export const Icon = styled.span`
  display: none;
  ${media.tablet`
    display: block;
    background: #ebebeb url(${icon}) no-repeat 50% 50%;
    box-sizing: border-box;
    padding: 11px 8px;
    width: 55px;
    height: 55px;
    margin-right: 30px;
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-content: flex-start;
  padding: 0;
  margin: 5px 0;
  ${media.tablet`
    padding-right: 50px;
  `}
`;

export const Label = styled.span`
  font-size: 24px;
  color: #d6d6d6;
  text-transform: uppercase;
  color: #4d42f8;
  padding-right: 18px;
`;
