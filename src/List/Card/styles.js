import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  padding-bottom: 24px;
  box-sizing: border-box;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background: #f4f4f4;
  padding: 9px;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  justify-content: space-between;
  flex: 1 0 auto;
  height: 100%;

  &:hover {
    > .sale {
      transform: translate(-5px, 5px);
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Image = styled.img`
  width: 100%;
`;
