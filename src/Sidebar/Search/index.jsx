import React from 'react';
import { Search, Label, Input } from './styles';

export default () => (
  <Search>
    <Label htmlFor="search-input">Search</Label>
    <Input type="text" name="search" id="search-input" />
  </Search>
  );
