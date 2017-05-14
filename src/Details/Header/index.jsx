import React from 'react';
import { Header, TitleWrap, Title, Additional, Options, Price, Break } from './styles';
import SaveButton from './SaveButton';
import SaleLabel from '../../Components/SaleLabel';
import ColorPicker from './ColorPicker';

export default () => (
  <Header>
    <TitleWrap>
      <Title>Ultra <Break />Boost</Title>
      <SaveButton>Save</SaveButton>
    </TitleWrap>

    <Additional>
      <Options>
        <ColorPicker />
        <SaleLabel static>Sale</SaleLabel>
      </Options>
      <Price>170$</Price>
    </Additional>
  </Header>
  );
