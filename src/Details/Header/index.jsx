import React, { Component } from 'react';
import { Header, TitleWrap, Title, Additional, Options, Price, Break } from './styles';
import SaveButton from './SaveButton';
import SaleLabel from '../../Components/SaleLabel';
import ColorPicker from './ColorPicker';

class ProductHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { color: '#e0e0e0' };
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleChangeColor(color) {
    this.setState({ color });
  }

  render() {
    return (
      <Header>
        <TitleWrap>
          <Title>Ultra <Break />Boost</Title>
          <SaveButton color={this.state.color}>Save</SaveButton>
        </TitleWrap>

        <Additional>
          <Options>
            <ColorPicker onChange={this.handleChangeColor} />
            <SaleLabel static>Sale</SaleLabel>
          </Options>
          <Price color={this.state.color}>170$</Price>
        </Additional>
      </Header>
    );
  }
}

export default ProductHeader;
