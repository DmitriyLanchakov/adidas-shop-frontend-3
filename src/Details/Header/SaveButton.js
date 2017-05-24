import styled from 'styled-components';
import media from '../../styles/media';

const Save = styled.span`
  display: none;
  ${media.tablet`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    text-transform: uppercase;
    width: 75px;
    height: 75px;
    color: #fff;
    background: ${props => props.color};
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    margin-top: 10px;

    &:hover {
      background: #4d42f8;
    }

    &:hover:after {
      content: '+';
      display: block;
      position: absolute;
      width: 100%;
      text-align: center;
      left: 0;
    }
  `}
`;

export default Save;
