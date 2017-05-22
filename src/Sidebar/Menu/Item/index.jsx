import React, { Component } from 'react';
import styled from 'styled-components';
import Link from './Link';
import { Submenu, SubLink } from './Submenu';

const Wrapper = styled.div`
  margin-bottom: 30px;
`;


class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { hasSubmenu: this.props.hasSubmenu, isOpened: false };
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick() {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }));
  }

  render() {
    return (
      <Wrapper>
        <Link
          to={this.props.to}
          hasSubmenu={this.props.hasSubmenu}
          opened={this.state.isOpened}
          onClick={this.handleLinkClick}
          title={this.props.title}
        >
          {this.props.title}
        </Link>
        <Submenu opened={this.state.isOpened}>
          <SubLink to="#" title="Adidas Shoes" className="current">Shoes</SubLink>
          <SubLink to="#" title="Adidas Clothing">Clothing</SubLink>
          <SubLink to="#" title="Adidas Accesories">Accesories</SubLink>
        </Submenu>
      </Wrapper>
    );
  }
}

export default Menu;
