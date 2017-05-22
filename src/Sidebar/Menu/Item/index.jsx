import React, { Component } from 'react';
import Link from './Link';
import { Submenu, SubLink } from './Submenu';


class Menu extends Component {
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
      <div>
        <Link
          to={this.props.to}
          hasSubmenu={this.props.hasSubmenu}
          isOpened={this.state.isOpened}
          onClick={this.handleClick}
          title={this.props.title}
        >
          {this.props.title}
        </Link>
        {this.state.isOpened &&
        <Submenu>
          <SubLink to="#" title="Adidas Shoes" className="current">Shoes</SubLink>
          <SubLink to="#" title="Adidas Clothing">Clothing</SubLink>
          <SubLink to="#" title="Adidas Accesories">Accesories</SubLink>
        </Submenu>}
      </div>
    );
  }
}

export default Menu;
