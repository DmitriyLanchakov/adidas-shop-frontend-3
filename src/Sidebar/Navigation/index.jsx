import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../../styles/media';
import Menu from './Menu';
import Link from './Menu/Submenu/Link';
import Toggle from './Toggle';

const Nav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  ${media.tablet`
    display: block;
    text-align: center;
    align-items: center;
    margin-top: 150px;
  `}
`;

const Container = styled.div`
  display: ${props => (props.isOpened ? 'block' : 'none')};
  position: absolute;
  left: 3%;
  width: 94%;
  top: 80px;
  background: #0e0e0e;
  z-index: 999;
  padding: 50px 0;
  font-size: 42px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  ${media.tablet`
    display: block;
    position: static;
    width: auto;
    background: none;
    box-shadow: none;
    padding: 0;
  `}
`;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }));
  }

  render() {
    return (
      <Nav>
        <Toggle onClick={this.handleClick} isOpened={this.state.isOpened} />
        <Container isOpened={this.state.isOpened}>
          <Menu title="Football">
            <Link to="/products/football/shoes" title="Adidas Shoes">Shoes</Link>
            <Link to="/products/football/clothing" title="Adidas Clothing">Clothing</Link>
            <Link to="/products/football/accessories" title="Adidas Accesories">Accesories</Link>
          </Menu>
          <Menu title="Running">
            <Link to="/products/running/shoes" title="Adidas Shoes">Shoes</Link>
            <Link to="/products/running/clothing" title="Adidas Clothing">Clothing</Link>
            <Link to="/products/running/accessories" title="Adidas Accesories">Accesories</Link>
          </Menu>
          <Menu title="Basketball">
            <Link to="/products/basketball/shoes" title="Adidas Shoes">Shoes</Link>
            <Link to="/products/basketball/clothing" title="Adidas Clothing">Clothing</Link>
            <Link to="/products/basketball/accessories" title="Adidas Accesories">Accesories</Link>
          </Menu>
        </Container>
      </Nav>
    );
  }
}

export default Navigation;
