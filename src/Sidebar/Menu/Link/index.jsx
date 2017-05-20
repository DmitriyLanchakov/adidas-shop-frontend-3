import React, { Component } from 'react';
import classNames from 'classnames';
import Link from './styles';

class StateLink extends Component {
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

export default StateLink;
