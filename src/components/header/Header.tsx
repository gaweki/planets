import React, { memo } from 'react';

import {
  Nav,
  Item,
} from './Header.styles';

const Header = () => (
  <Nav>
    <Item href="/">Planets</Item>
  </Nav>
);

export default memo(Header);
