import styled from 'styled-components';
import media from '../../../../styles/media';

const Label = styled.div`
  display: none;
  ${media.tablet`
    display: flex;
    flex-flow: column nowrap;
    flex: 0 0 160px;
    justify-content: center;
    height: 120px;
    cursor: pointer;
    margin: 0 14px;
    flex: 1;

    & span {
      width: 100%;
      background: #e7e7e7;
      height: 3px;
      border-radius: 1.5px;
      position: relative;

      &:before,
      &:after {
        content: '';
        display: block;
        position: relative;
        width: 100%;
        background: #e7e7e7;
        height: 3px;
        border-radius: 1.5px;
        transition: inherit;
      }

      &:before {
        top: -6px;
      }

      &:after {
        top: 3px;
      }
    }
    &:hover span:before {
      top: -13px;
    }

    &:hover span:after {
      top: 10px;
    }
    }
  `}
`;

export default Label;
