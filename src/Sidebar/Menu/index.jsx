import React, { Component } from 'react';
import Menu from './Wrapper';
import Item from './Item';
import { ToggleWrapper, Toggle } from './ToggleButton';

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
    return (
      <div>
        <ToggleWrapper>
          <Toggle opened={this.state.isOpened} onClick={this.handleClick} />
        </ToggleWrapper>
        <Menu opened={this.state.isOpened}>
          <Item to="#" title="Footbal" hasSubmenu />
          <Item to="#" title="Running" hasSubmenu />
          <Item to="#" title="Basketball" hasSubmenu />
        </Menu>
      </div>
    );
  }
}

export default MainMenu;
