import React from 'react';
import Button from './Button';
import { Filter, Icon, Container, HeadingLabel } from './styles';

export default () => (
  <Filter>
    <Icon />
    <Container>
      <Button current>Men</Button>
      <Button>Women</Button>
    </Container>
    <Container>
      <HeadingLabel>Size</HeadingLabel>
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
