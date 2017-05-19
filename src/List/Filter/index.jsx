import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Filter, Icon, Container, Label } from './styles';

const StyledCont = styled(Container)`
  & button:first-child {
    padding: 0 10px 0 0;
  }
`;

export default () => (
  <Filter>
    <Icon />
    <StyledCont>
      <Button current>Men</Button>
      <Button>Women</Button>
    </StyledCont>
    <Container>
      <Label>Size</Label>
      <Button>36</Button>
      <Button>37</Button>
      <Button>38</Button>
      <Button>39</Button>
      <Button>40</Button>
      <Button>41</Button>
      <Button current>42</Button>
      <Button>43</Button>
    </Container>
  </Filter>
);
