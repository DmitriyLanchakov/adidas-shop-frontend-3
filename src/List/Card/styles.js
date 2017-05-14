import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background: #f4f4f4;
  padding: 9px;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 24px;
  justify-content: space-between;
  flex: 1 0 auto;

  &:hover {
    > .sale {
      transform: translate(-5px, 5px);
    }
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  font-size: 30px;
  color: ${props => (props.sale ? '#fff' : '#000')};
  text-decoration: none;
  padding: 23px 0 27px 0;
  transition: none;
  background: ${props => (props.sale ? 'linear-gradient(107deg, #0c09bf, #966dd8)' : '#fff')};
  margin-top: 6px;

  &:hover {
    background-image: ${props => (props.sale ? 'linear-gradient(180deg, #0c09bf, #966dd8)' : 'linear-gradient(107deg, #0c09bf, #966dd8)')};
    color: #fff;
  }

`;

export const Image = styled.img`
  width: 100%;
`;
