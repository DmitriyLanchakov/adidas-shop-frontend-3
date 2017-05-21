import React, { Component } from 'react';
import Link from './Link';
import { Submenu, SubLink } from './Submenu';


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
      <div>
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
      </div>
    );
  }
}

export default Menu;
