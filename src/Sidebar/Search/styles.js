import styled from 'styled-components';
import media from '../../styles/media';
import icon from './search-icon.svg';

export const Search = styled.form`
  display: none;
  ${media.tablet`
    display: block;
    width: 100%;
    padding: 0 23px;
  `}
`;

export const Label = styled.label`
  display: none;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px 14px 10px 56px;
  background: #0e0e0e url(${icon}) no-repeat 14px 7px;
  border: none;
  border-bottom: 4px solid #373737;
  color: #fff;
  font-size: 24px;

  &:hover {
    border-bottom: 4px solid #444;
  }

  &:focus {
    outline: none;
    border-bottom: 4px solid #fff;
  }
`;
