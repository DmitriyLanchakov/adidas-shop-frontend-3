import React, { Component } from 'react';
import Button from './Button';
import { Submenu } from './Submenu';


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
        <Button isOpened={this.state.isOpened} onClick={this.handleClick}>
          {this.props.title}
        </Button>
        {this.state.isOpened &&
        <Submenu>{this.props.children}</Submenu>}
      </div>
    );
  }
}

export default Menu;
