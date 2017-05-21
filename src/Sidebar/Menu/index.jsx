import React, { Component } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import media from '../../styles/media';
import Link from './Link';
import Submenu from './Submenu';
import Menu from './Wrapper';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`
    display: block;
  `};
`;

const ToggleMenu = styled.button`
  background: #fff;
  border: none;
  width: 50px;
  height: 4px;
  position: relative;

  &.opened {
    transform: rotate(45deg);
  }

  &:before,
  &:after {
    content: '';
    width: 50px;
    height: 4px;
    display: block;
    background: #fff;
    position: absolute;
    left: 0;
    transition: all 0.3s ease;
  }

  &:before {
    bottom: 10px;;
  }

  &.opened:before {
    display: none;
  }

  &:after {
    top: 10px;
  }

  &.opened:after {
    transform: rotate(-90deg) translate(10px, 1px);
  }

  ${media.tablet`
    display: none;
  `};
`;

class MainMenu extends Component {
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
    const ToggleClass = classNames({
      opened: this.state.isOpened,
    });
    return (
      <Wrapper>
        <ToggleMenu onClick={this.handleClick} className={ToggleClass} />
        {this.state.isOpened &&
        <Menu>
          <Link to="#" title="Sports Category" hasSubmenu>Football</Link>
          <Submenu>
            <Link to="#" title="Adidas Shoes" className="current">Shoes</Link>
            <Link to="#" title="Adidas Clothing">Clothing</Link>
            <Link to="#" title="Adidas Accesories">Accesories</Link>
          </Submenu>
          <Link to="#" title="Brands Category" hasSubmenu>Running</Link>
          <Submenu>
            <Link to="#" title="Adidas Shoes" className="current">Shoes</Link>
            <Link to="#" title="Adidas Clothing">Clothing</Link>
            <Link to="#" title="Adidas Accesories">Accesories</Link>
          </Submenu>
          <Link to="#" title="Micoach Category" hasSubmenu>Basketball</Link>
          <Submenu>
            <Link to="#" title="Adidas Shoes" className="current">Shoes</Link>
            <Link to="#" title="Adidas Clothing">Clothing</Link>
            <Link to="#" title="Adidas Accesories">Accesories</Link>
          </Submenu>
        </Menu> }
      </Wrapper>
    );
  }
}

export default MainMenu;
/*
export default () => (
  <Wrapper>
    <ToggleMenu className="opened" />
    <Menu>
      <Link to="#" title="Sports Category" hasSubmenu>Football</Link>
      <Submenu>
        <Link to="#" title="Adidas Shoes" className="current">Shoes</Link>
        <Link to="#" title="Adidas Clothing">Clothing</Link>
        <Link to="#" title="Adidas Accesories">Accesories</Link>
      </Submenu>
      <Link to="#" title="Brands Category" hasSubmenu>Running</Link>
      <Submenu>
        <Link to="#" title="Adidas Shoes" className="current">Shoes</Link>
        <Link to="#" title="Adidas Clothing">Clothing</Link>
        <Link to="#" title="Adidas Accesories">Accesories</Link>
      </Submenu>
      <Link to="#" title="Micoach Category" hasSubmenu>Basketball</Link>
      <Submenu>
        <Link to="#" title="Adidas Shoes" className="current">Shoes</Link>
        <Link to="#" title="Adidas Clothing">Clothing</Link>
        <Link to="#" title="Adidas Accesories">Accesories</Link>
      </Submenu>
    </Menu>
  </Wrapper>
);
*/
