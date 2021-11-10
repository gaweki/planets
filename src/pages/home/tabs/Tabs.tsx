import React from 'react';

import {
  Container,
  TabItem,
} from './Tabs.styles';

const Header = () => (
  <Container>
    <TabItem to="/" exact activeStyle={{ borderBottom: '5px solid #9381FF' }}>
      List
    </TabItem>
    <TabItem to="/wishlist" exact activeStyle={{ borderBottom: '5px solid #9381FF' }}>
      Wishlist
    </TabItem>
  </Container>
);

export default Header;
