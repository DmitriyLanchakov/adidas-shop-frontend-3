import styled from 'styled-components';

const Label = styled.span`
  display: block;
  position: ${props => props.static ? 'static' : 'absolute'};
  top: 17px;
  right: 17px;
  padding: 7px 20px;
  background: #ff5c5c;
  text-transform: uppercase;
  font-size: 14px;
  color: #fff;
`;

export default Label;
