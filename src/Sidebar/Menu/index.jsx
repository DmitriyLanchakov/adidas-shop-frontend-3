import React, { Component } from 'react';
import classNames from 'classnames';
import Link from './Link';
import Submenu from './Submenu';
import Menu from './Wrapper';

class LinkBlock extends Component {
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
    const LinkClass = classNames({
      hasSubmenu: this.state.hasSubmenu,
      opened: this.state.isOpened,
    });
    return (
      <Link to={this.props.to} title={this.props.title} className={LinkClass} onClick={this.handleLinkClick}>
        {this.props.children}
      </Link>
    );
  }
}


export default () => (
  <Menu>
    <LinkBlock to="#" title="Sports Category" hasSubmenu>Sports</LinkBlock>
    <Submenu />
    <Link to="#" title="Brands Category">Brands</Link>
    <Link to="#" title="Micoach Category">Micoach</Link>
  </Menu>
  );
