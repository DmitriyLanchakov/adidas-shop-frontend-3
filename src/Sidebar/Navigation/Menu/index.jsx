import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Submenu from './Submenu';

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

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
      <Wrapper>
        <Button isOpened={this.state.isOpened} onClick={this.handleClick}>
          {this.props.title}
        </Button>
        {this.state.isOpened &&
        <Submenu>{this.props.children}</Submenu>}
      </Wrapper>
    );
  }
}

export default Menu;
